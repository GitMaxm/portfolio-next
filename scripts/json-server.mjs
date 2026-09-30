import path from 'node:path'
import process from 'node:process'

import { watch } from 'chokidar'
import { NormalizedAdapter } from 'json-server/lib/adapters/normalized-adapter.js'
import { Observer } from 'json-server/lib/adapters/observer.js'
import { createApp } from 'json-server/lib/app.js'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const CONTENT_FILE = path.join(process.cwd(), 'content', 'portfolio.json')
const HOST = '127.0.0.1'
const PORT = 3001

const observer = new Observer(new NormalizedAdapter(new JSONFile(CONTENT_FILE)))
const db = new Low(observer, {})

await db.read()

let isWriting = false

observer.onWriteStart = () => {
  isWriting = true
}

observer.onWriteEnd = () => {
  isWriting = false
}

watch(CONTENT_FILE, { awaitWriteFinish: { stabilityThreshold: 200 } }).on('change', () => {
  if (isWriting) {
    return
  }

  db.read().catch((error) => {
    console.error(`Не удалось перечитать ${path.relative(process.cwd(), CONTENT_FILE)}: ${error.message}`)
  })
})

createApp(db, { logger: false }).listen(PORT, () => {
  console.log(`json-server: http://${HOST}:${PORT}/ — ${path.relative(process.cwd(), CONTENT_FILE)}`)
}, HOST)
