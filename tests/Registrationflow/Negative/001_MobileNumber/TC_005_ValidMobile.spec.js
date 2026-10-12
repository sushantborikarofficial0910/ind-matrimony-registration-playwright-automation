const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');

test('TC_005 - Verify Get OTP button is enabled when Mobile Number is valid', async ({ page }) => {

    console.log("🚀 TC_005 Started");

    await page.goto(baseUrl);

    await page.getByRole('link', { name: 'Register' }).click();

    await page.getByRole('textbox', {name: 'Mobile Number'}).fill('9876543210');

    await expect(page.getByRole('button', {name: 'Get OTP'})).toBeEnabled();

    console.log("✅ PASS - Get OTP button is enabled");

});

