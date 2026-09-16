const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 120000,

  expect: {
    timeout: 10000
  },

  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    browserName: 'chromium',
    headless: false,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
});