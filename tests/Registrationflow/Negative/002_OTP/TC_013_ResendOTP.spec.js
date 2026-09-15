const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_013 - Resend OTP', async ({ page }) => {

    console.log("🚀 TC_013 Started");

    await page.goto('https://uat-app.inddevelopment.in/');
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();

    console.log("⏳ Waiting for 60 seconds to enable Resend OTP...");
    // Wait for 60 seconds
    await page.waitForTimeout(60000);
    await page.getByText('Resend OTP').click();

    console.log("✅ PASS - Resend OTP Verified");

});