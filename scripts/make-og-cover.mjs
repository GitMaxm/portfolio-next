import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import sharp from 'sharp'

const WIDTH = 1200
const HEIGHT = 630

const BG = '#171718'
const ACCENT = '#8f94f2'
const TEXT = '#ffffff'
const MUTED = 'rgba(255,255,255,0.62)'

const PHOTO = path.join(process.cwd(), 'public', 'img', 'about', 'me.webp')
const OUT = path.join(process.cwd(), 'public', 'img', 'og', 'cover.png')

const NAME = 'Максим Иваненко'
const ROLE = 'Фронтенд-разработчик'
const STACK = 'React · Next.js · TypeScript · Веб-компоненты'
const SITE = 'ivanmax.ru'

const PHOTO_SIZE = 380
const PHOTO_X = 80
const PHOTO_Y = (HEIGHT - PHOTO_SIZE) / 2
const TEXT_X = PHOTO_X + PHOTO_SIZE + 64

const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;')

const overlay = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .name  { font: 700 62px Helvetica, Arial, sans-serif; fill: ${TEXT}; }
    .role  { font: 400 34px Helvetica, Arial, sans-serif; fill: ${ACCENT}; }
    .stack { font: 400 24px Helvetica, Arial, sans-serif; fill: ${MUTED}; }
    .site  { font: 400 22px Helvetica, Arial, sans-serif; fill: ${MUTED}; }
  </style>

  <rect x="${TEXT_X}" y="212" width="56" height="4" rx="2" fill="${ACCENT}"/>

  <text class="name"  x="${TEXT_X}" y="292">${escape(NAME)}</text>
  <text class="role"  x="${TEXT_X}" y="344">${escape(ROLE)}</text>
  <text class="stack" x="${TEXT_X}" y="400">${escape(STACK)}</text>
  <text class="site"  x="${TEXT_X}" y="${HEIGHT - 64}">${escape(SITE)}</text>
</svg>`

const mask = Buffer.from(
  `<svg width="${PHOTO_SIZE}" height="${PHOTO_SIZE}" xmlns="http://www.w3.org/2000/svg">
     <rect width="${PHOTO_SIZE}" height="${PHOTO_SIZE}" rx="28"/>
   </svg>`,
)

const run = async () => {
  const photo = await sharp(await readFile(PHOTO))
    .resize(PHOTO_SIZE, PHOTO_SIZE, { fit: 'cover', position: 'top' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer()

  const cover = await sharp({
    create: { width: WIDTH, height: HEIGHT, channels: 4, background: BG },
  })
    .composite([
      { input: photo, left: PHOTO_X, top: Math.round(PHOTO_Y) },
      { input: Buffer.from(overlay), left: 0, top: 0 },
    ])

    .png({ palette: true, colours: 128, compressionLevel: 9, effort: 10 })
    .toBuffer()

  await writeFile(OUT, cover)

  console.log(`${path.relative(process.cwd(), OUT)} — ${WIDTH}×${HEIGHT}, ${Math.round(cover.length / 1024)} КБ`)
}

run().catch((error) => {
  console.error('Не вышло:', error.message)
  process.exitCode = 1
})
