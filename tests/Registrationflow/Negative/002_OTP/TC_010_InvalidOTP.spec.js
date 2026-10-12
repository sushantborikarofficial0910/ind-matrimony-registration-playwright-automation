const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_010 - Invalid OTP', async ({ page }) => {
    console.log("🚀 TC_010 Started");
    await page.goto(baseUrl);
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('111111');
    await page.getByRole('button', { name: 'Verify' }).click();
    // Verify that the error message is displayed
    await expect(page.getByText('OTP is invalid or expired')).toBeVisible();

    console.log("✅ PASS - Invalid OTP Validation Verified");

});