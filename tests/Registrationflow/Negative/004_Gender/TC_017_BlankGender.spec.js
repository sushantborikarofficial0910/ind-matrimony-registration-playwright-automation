const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_017 - Blank Gender Selection', async ({ page }) => {

    console.log("🚀 TC_017  Started");

    // Navigate to Gender Page
    await page.goto(baseUrl);
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');
    await page.getByRole('button', { name: 'Verify' }).click();
    
    //Profile Created By
    await page.getByText('Self').click();
    await page.locator('.continue-btn').click();

    console.log("✅ Gender Page Opened");

    // Click Continue Without Selecting Gender
    await page.locator('.continue-btn').click();

    // Verify Validation Message
    await expect(page.getByText('Please select gender to continue.')).toBeVisible();

    console.log("✅ PASS - Validation Message Verified");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 2 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});