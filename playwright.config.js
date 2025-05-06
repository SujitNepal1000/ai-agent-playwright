// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: false,
    viewport: null, // Allows browser to be maximized
    launchOptions: {
      args: ['--start-maximized'],
    },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
};

module.exports = config; 