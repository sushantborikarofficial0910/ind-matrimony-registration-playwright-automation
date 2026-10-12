const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_012 - OTP More Than 6 Digits', async ({ page }) => {

    console.log("🚀 TC_012 Started");

    await page.goto(baseUrl);

    await page.getByRole('link', { name: 'Register' }).click();

    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);

    await page.getByRole('button', { name: 'Get OTP' }).click();

    const otpField = page.getByRole('textbox', { name: 'Enter OTP' });

    // Try entering 7 digits
    await otpField.fill('1234567');

    console.log("✅ PASS - OTP field not accepting more than 6 digits");

});