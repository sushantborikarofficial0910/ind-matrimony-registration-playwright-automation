const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_014 - Verify Continue Button', async ({ page }) => {

    console.log("🚀 TC_014s Started");

    // Navigate to Profile Created By Page
    await page.goto(baseUrl);
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');
    await page.getByRole('button', { name: 'Verify' }).click();

    console.log("✅ Profile Created By Page Opened");

    // Verify Validation Message
    await expect(page.getByText('Who Is Creating This Profile?')).toBeVisible();
    // Select Self
    //await page.getByText('Self').click();

    // Verify Continue Button Enabled
    await expect(page.locator('.continue-btn')).toBeEnabled();

    console.log("✅ PASS - Continue Button Enabled After Profile Selection");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 1 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});