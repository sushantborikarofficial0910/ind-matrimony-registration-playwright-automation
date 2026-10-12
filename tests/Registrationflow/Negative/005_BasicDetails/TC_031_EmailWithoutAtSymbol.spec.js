const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_031 - Email Without @ Symbol', async ({ page }) => {

    console.log("🚀 TC_031 Started");

    // Navigate to Basic Details Page
    await page.goto(baseUrl);
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.getByText('Self').click();
    await page.locator('.continue-btn').click();
    await page.getByText('I AM A MAN').click();
    await page.locator('.continue-btn').click();

    console.log("✅ Basic Details Page Opened");

    // Mandatory Fields
    await page.getByRole('textbox').first().fill('Sushant');
    await page.getByRole('textbox').nth(1).fill('Patil');

    // Email Without @
    await page.getByRole('textbox').nth(2).fill('abcgmail.com');

    // Continue
    await page.locator('.continue-btn').click();

    // Validation
    await expect(page.getByText('Invalid email address')).toBeVisible();

    console.log("✅ PASS - Email Without @ Validation Verified");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');

    console.log("✅ PASS - Registration Step Number Verified");


});