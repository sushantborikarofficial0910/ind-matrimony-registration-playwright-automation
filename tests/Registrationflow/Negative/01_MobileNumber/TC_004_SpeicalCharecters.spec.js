const { test, expect } = require('@playwright/test');

test('TC_004 - Verify Get OTP button is disabled when Enter the Special Characters', async ({ page }) => {

    console.log("🚀 TC_004 Started");

    await page.goto('https://uat-app.inddevelopment.in/');

    await page.getByRole('link', { name: 'Register' }).click();

    await page.getByRole('textbox', {name: 'Mobile Number'}).fill('!@#$%^&*()');

    await expect(page.getByRole('button', {name: 'Get OTP'})).toBeDisabled();

    console.log("✅ PASS - Get OTP button is disabled");

});

