const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_016 - Blank Profile Selection', async ({ page }) => {

    console.log("🚀 TC_016 Started");

    // Navigate to Profile Created By Page
    await page.goto('https://uat-app.inddevelopment.in/');

    await page.getByRole('link', { name: 'Register' }).click();

    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);

    await page.getByRole('button', { name: 'Get OTP' }).click();

    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');

    await page.getByRole('button', { name: 'Verify' }).click();

    console.log("✅ Profile Created By Page Opened");

    // Verify Validation Message
    await expect(page.getByText('Who Is Creating This Profile?')).toBeVisible();

    // Do NOT select any profile

    // Click Continue
    await page.locator('.continue-btn').click();

    console.log("✅ Continue Button Clicked");

    // Verify Validation Message
    await expect(page.getByText('Please specify who has created your matrimony profile.')).toBeVisible();

    console.log("✅ PASS - Validation Message Verified");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 1 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});