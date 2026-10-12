const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');

test('TC_003 - Verify Get OTP button is disabled when Enter the Alphabetical Characters', async ({ page }) => {

    console.log("🚀 TC_003 Started");

    await page.goto(baseUrl);

    await page.getByRole('link', { name: 'Register' }).click();

    await page.getByRole('textbox', {name: 'Mobile Number'}).fill('abcdefasde');

    await expect(page.getByRole('button', {name: 'Get OTP'})).toBeDisabled();

    console.log("✅ PASS - Get OTP button is disabled");

});

