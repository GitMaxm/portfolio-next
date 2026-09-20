import type { Browser } from 'playwright-core';

/** Окно браузера 4:3 — те же пропорции, что у картинки на странице проекта. */
const VIEWPORT = { width: 1280, height: 960 };

/** Снимаем вдвое крупнее: после ресайза до 800 × 600 не остаётся мыла. */
const DEVICE_SCALE_FACTOR = 2;

const NAVIGATION_TIMEOUT = 30_000;
const IDLE_TIMEOUT = 5_000;
const SETTLE_DELAY = 400;

/**
 * Анимация, попавшая в кадр на середине, выглядит как брак вёрстки: гасим их
 * все перед снимком. Каретка в автофокусном поле тоже попадает на скриншот.
 */
const FREEZE_CSS = `
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }

  html {
    scroll-behavior: auto !important;
  }

  * {
    caret-color: transparent !important;
  }
`;

const launchBrowser = async (): Promise<Browser> => {
  // Динамический импорт: playwright-core лежит в devDependencies, и на проде
  // без него должна падать одна ручка, а не весь роут при загрузке модуля.
  const playwright = await import('playwright-core').catch(() => null);

  if (!playwright) {
    throw new Error('playwright-core не установлен — выполните npm install');
  }

  try {
    // channel: 'chrome' — берём Chrome, уже установленный в системе. Поэтому
    // playwright-core ничего не качает и в проекте нет браузера на 150 МБ.
    return await playwright.chromium.launch({ channel: 'chrome' });
  } catch {
    throw new Error('Не удалось запустить Chrome. Он установлен в системе?');
  }
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** Снимает первый экран сайта. Возвращает PNG — режет его уже saveProjectImage. */
export const captureScreenshot = async (url: URL): Promise<Uint8Array> => {
  const browser = await launchBrowser();

  try {
    const context = await browser.newContext({
      viewport: VIEWPORT,
      deviceScaleFactor: DEVICE_SCALE_FACTOR,
      reducedMotion: 'reduce',
    });

    const page = await context.newPage();

    let response;

    try {
      response = await page.goto(url.href, { waitUntil: 'load', timeout: NAVIGATION_TIMEOUT });
    } catch {
      throw new Error(`${url.hostname} не открылся: проверьте ссылку`);
    }

    // goto не бросает на 404: страницу ошибки браузер открывает так же успешно,
    // как настоящий сайт. Без этой проверки в обложку проекта попадёт
    // «404 There isn't a GitHub Pages site here».
    if (response && !response.ok()) {
      throw new Error(`${url.hostname} ответил ${response.status()} — снимать нечего`);
    }

    // networkidle на живых сайтах часто не наступает вовсе (аналитика, поллинг),
    // поэтому ждём его отдельно и коротко, а не заваливаем по нему весь снимок.
    await page.waitForLoadState('networkidle', { timeout: IDLE_TIMEOUT }).catch(() => {});

    await page.addStyleTag({ content: FREEZE_CSS });

    // Даём дорисоваться шрифтам и картинкам, которые подгрузились последними.
    await sleep(SETTLE_DELAY);

    return await page.screenshot({ type: 'png' });
  } finally {
    await browser.close();
  }
};
