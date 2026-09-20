/**
 * Убирает из public/img/projects картинки, на которые больше никто не ссылается.
 *
 * Трогает только то, что собрала админка: имя вида <название>-<хэш>.webp и его
 * пара -card.webp. Старые картинки портфолио под этот шаблон не подпадают и не
 * удаляются никогда — в моках лежат три тестовые записи, а не всё портфолио,
 * поэтому «удалить всё, на что нет ссылки» снесло бы 9 МБ нужных файлов.
 *
 *   npm run images:prune           показать список
 *   npm run images:prune -- --yes  удалить
 */

import { readdir, readFile, stat, unlink } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const IMAGES_DIR = path.join(process.cwd(), 'public', 'img', 'projects')
const MOCK_FILE = path.join(process.cwd(), 'mock', 'projectsTestTable.json')

/** Так выглядит имя, которое собирает saveProjectImage. */
const GENERATED_NAME = /-[0-9a-f]{6,16}(-card)?\.webp$/

const formatSize = (bytes) => `${Math.round(bytes / 1024)} КБ`

const collectUsedNames = async () => {
  const { projects = [] } = JSON.parse(await readFile(MOCK_FILE, 'utf8'))

  const used = new Set()

  for (const project of projects) {
    for (const name of Object.values(project.image ?? {})) {
      if (name) {
        used.add(name)
      }
    }
  }

  return used
}

const describe = async (names) => {
  const sizes = await Promise.all(
    names.map(async (name) => (await stat(path.join(IMAGES_DIR, name))).size),
  )

  return { sizes, total: sizes.reduce((sum, size) => sum + size, 0) }
}

const run = async () => {
  const shouldDelete = process.argv.includes('--yes')

  const [used, files] = await Promise.all([collectUsedNames(), readdir(IMAGES_DIR)])

  const generated = files.filter((file) => GENERATED_NAME.test(file))
  const orphans = generated.filter((file) => !used.has(file)).sort()

  console.log(`${path.relative(process.cwd(), IMAGES_DIR)}: всего ${files.length} файлов`)
  console.log(`Собрано админкой: ${generated.length}, остальные ${files.length - generated.length} не трогаем`)

  if (orphans.length === 0) {
    console.log('\nЛишнего нет.')

    return
  }

  const { sizes, total } = await describe(orphans)

  console.log(`\nНи один проект не ссылается на ${orphans.length}:`)

  orphans.forEach((name, index) => {
    console.log(`  ${name}  ${formatSize(sizes[index])}`)
  })

  console.log(`\nВсего ${formatSize(total)}.`)

  if (!shouldDelete) {
    console.log('Это сухой прогон. Удалить: npm run images:prune -- --yes')

    return
  }

  await Promise.all(orphans.map((name) => unlink(path.join(IMAGES_DIR, name))))

  console.log(`Удалено ${orphans.length} файлов, освобождено ${formatSize(total)}.`)
}

run().catch((error) => {
  console.error('Не вышло:', error.message)
  process.exitCode = 1
})
