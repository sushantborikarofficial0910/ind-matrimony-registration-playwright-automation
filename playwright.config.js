require('./alias');
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 120000,

  expect: {
    timeout: 10000
  },

  reporter: [
    ['html'],
    ['list']
  ],

  use: {

    browserName: 'chromium',

    headless: false,

    viewport: {
      width: 1536,
      height: 864
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    ignoreHTTPSErrors: true
  }

});