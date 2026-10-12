const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');

test('TC_002 - Verify Get OTP button is disabled when Mobile Number is invalid', async ({ page }) => {

    console.log("🚀 TC_001 Started");

    await page.goto(baseUrl);

    await page.getByRole('link', { name: 'Register' }).click();

    await page.getByRole('textbox', {name: 'Mobile Number'}).fill('12345');

    await expect(page.getByRole('button', {name: 'Get OTP'})).toBeDisabled();

    console.log("✅ PASS - Get OTP button is disabled");

});

