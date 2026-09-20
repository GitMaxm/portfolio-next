import type { Browser } from 'playwright-core';

const VIEWPORT = { width: 1280, height: 960 };

const DEVICE_SCALE_FACTOR = 2;

const NAVIGATION_TIMEOUT = 30_000;
const IDLE_TIMEOUT = 5_000;
const SETTLE_DELAY = 400;

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

  const playwright = await import('playwright-core').catch(() => null);

  if (!playwright) {
    throw new Error('playwright-core не установлен — выполните npm install');
  }

  try {

    return await playwright.chromium.launch({ channel: 'chrome' });
  } catch {
    throw new Error('Не удалось запустить Chrome. Он установлен в системе?');
  }
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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

    if (response && !response.ok()) {
      throw new Error(`${url.hostname} ответил ${response.status()} — снимать нечего`);
    }

    await page.waitForLoadState('networkidle', { timeout: IDLE_TIMEOUT }).catch(() => {});

    await page.addStyleTag({ content: FREEZE_CSS });

    await sleep(SETTLE_DELAY);

    return await page.screenshot({ type: 'png' });
  } finally {
    await browser.close();
  }
};
