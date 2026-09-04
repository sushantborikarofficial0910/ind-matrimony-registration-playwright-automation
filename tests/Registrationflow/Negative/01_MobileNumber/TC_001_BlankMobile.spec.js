const { test, expect } = require('@playwright/test');

test('TC_001 - Verify Get OTP button is disabled when Mobile Number is blank', async ({ page }) => {

    console.log("🚀 TC_001 Started");

    await page.goto('https://uat-app.inddevelopment.in/');

    await page.getByRole('link', { name: 'Register' }).click();

    const getOtpButton = page.getByRole('button', { name: 'Get OTP' });

    await expect(getOtpButton).toBeDisabled();

    console.log("✅ PASS - Get OTP button is disabled");

});