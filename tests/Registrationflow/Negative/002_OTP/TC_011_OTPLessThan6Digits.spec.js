const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_011 - OTP Less Than 6 Digits', async ({ page }) => {
    console.log("🚀 TC_011 Started");
    await page.goto('https://uat-app.inddevelopment.in/');
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('11111');
    
    // Verify that the error message is displayed
    await expect(page.getByText('OTP must be exactly 6 digits')).toBeVisible();
    
    // Verify Verify button is disabled
    await expect(page.getByRole('button', { name: 'Verify' })).toBeDisabled();

    console.log("✅ PASS - Verify Button Disabled for OTP Less Than 6 Digits");

}); 