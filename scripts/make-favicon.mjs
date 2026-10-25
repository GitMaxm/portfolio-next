import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import sharp from 'sharp'

const APP = path.join(process.cwd(), 'src', 'app')
const SOURCE = path.join(APP, 'icon.svg')

const ICO_SIZES = [16, 32, 48]
const APPLE_SIZE = 180

const render = (svg, size) =>
  sharp(svg, { density: 72 * (size / 32) * 2 }).resize(size, size).png().toBuffer()

const toIco = (images) => {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(images.length, 4)

  let offset = 6 + images.length * 16
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size % 256, 0)
    entry.writeUInt8(size % 256, 1)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(data.length, 8)
    entry.writeUInt32LE(offset, 12)
    offset += data.length
    return entry
  })

  return Buffer.concat([header, ...entries, ...images.map(({ data }) => data)])
}

const svg = await readFile(SOURCE)

const icoImages = await Promise.all(
  ICO_SIZES.map(async (size) => ({ size, data: await render(svg, size) })),
)
await writeFile(path.join(APP, 'favicon.ico'), toIco(icoImages))

const apple = await sharp({
  create: { width: APPLE_SIZE, height: APPLE_SIZE, channels: 4, background: '#171718' },
})
  .composite([{ input: await render(svg, APPLE_SIZE) }])
  .png()
  .toBuffer()
await writeFile(path.join(APP, 'apple-icon.png'), apple)

console.log('favicon.ico, apple-icon.png — готово')
