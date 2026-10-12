const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');

test('TC_007 - Verify Get OTP button is enabled when Enters Existing Mobile Number', async ({ page }) => {

    console.log("🚀 TC_007 Started");

    await page.goto(baseUrl);

    await page.getByRole('link', { name: 'Register' }).click();

    await page.getByRole('textbox', {name: 'Mobile Number'}).fill('7447574500');

    await expect(page.getByRole('button', {name: 'Get OTP'})).toBeEnabled();

    console.log("✅ PASS - Get OTP button is enabled");

});

