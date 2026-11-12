import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import { chromium } from 'playwright-core'
import sharp from 'sharp'

const WIDTH = 1200
const HEIGHT = 630

const PHOTO = path.join(process.cwd(), 'public', 'img', 'about', 'me.webp')
const MARK = path.join(process.cwd(), 'src', 'app', 'icon.svg')
const OUT = path.join(process.cwd(), 'public', 'img', 'og', 'cover.png')

const NAME = 'Максим Иваненко'
const ROLE = 'Фронтенд-разработчик'
const STACK = ['React', 'Next.js', 'TypeScript', 'Веб-компоненты']
const SITE = 'ivanenkomax.ru'

const toDataUri = async (file, type) => `data:${type};base64,${(await readFile(file)).toString('base64')}`

const buildHtml = ({ photo, mark }) => `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700&display=block&subset=cyrillic" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: ${WIDTH}px;
    height: ${HEIGHT}px;
    display: grid;
    grid-template-columns: 380px 1fr;
    align-items: center;
    gap: 64px;
    padding: 0 80px;
    background:
      radial-gradient(520px circle at 82% 30%, rgba(92, 98, 236, 0.22), transparent 70%),
      #171718;
    color: #fff;
    font-family: 'Onest', sans-serif;
  }
  .photo {
    width: 380px;
    height: 380px;
    border-radius: 28px;
    object-fit: cover;
    object-position: center top;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }
  .mark { width: 56px; height: 56px; margin-bottom: 36px; display: block; }
  .name { font-size: 64px; font-weight: 700; line-height: 1.02; letter-spacing: -0.035em; }
  .role { margin-top: 12px; font-size: 36px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: rgba(255, 255, 255, 0.42); }
  .stack { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 36px; }
  .stack span {
    padding: 8px 16px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    font-size: 20px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.78);
  }
  .site { margin-top: 32px; font-size: 22px; font-weight: 500; color: #9ea3f5; }
</style>
</head>
<body>
  <img class="photo" src="${photo}" alt="">
  <div>
    <img class="mark" src="${mark}" alt="">
    <div class="name">${NAME}</div>
    <div class="role">${ROLE}</div>
    <div class="stack">${STACK.map((item) => `<span>${item}</span>`).join('')}</div>
    <div class="site">${SITE}</div>
  </div>
</body>
</html>`

const run = async () => {
  const html = buildHtml({
    photo: await toDataUri(PHOTO, 'image/webp'),
    mark: await toDataUri(MARK, 'image/svg+xml'),
  })

  const browser = await chromium.launch({ channel: 'chrome' })

  try {
    const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT }, deviceScaleFactor: 1 })

    await page.setContent(html, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)

    const isOnestLoaded = await page.evaluate(() => document.fonts.check('700 64px Onest', 'Максим'))

    if (!isOnestLoaded) {
      throw new Error('шрифт Onest не загрузился, проверьте интернет')
    }

    const screenshot = await page.screenshot({ type: 'png' })

    const cover = await sharp(screenshot)
      .png({ palette: true, colours: 128, compressionLevel: 9, effort: 10 })
      .toBuffer()

    await writeFile(OUT, cover)

    console.log(`${path.relative(process.cwd(), OUT)} — ${WIDTH}×${HEIGHT}, ${Math.round(cover.length / 1024)} КБ`)
  } finally {
    await browser.close()
  }
}

run().catch((error) => {
  console.error('Не вышло:', error.message)
  process.exitCode = 1
})
