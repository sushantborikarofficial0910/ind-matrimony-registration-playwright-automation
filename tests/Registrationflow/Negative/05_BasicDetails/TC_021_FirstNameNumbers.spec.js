const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');  
test('TC_021 - First Name with Numbers', async ({ page }) => {

    console.log("🚀 TC_021 Started");

    // Navigate to Basic Details Page
    await page.goto('https://uat-app.inddevelopment.in/');
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

    // Invalid First Name
    await page.getByRole('textbox').first().fill('123456');

    // Valid Last Name
    await page.getByRole('textbox').nth(1).fill('Patil');

    // Continue
    await page.locator('.continue-btn').click();

    // Verify Validation
    await expect(page.getByText('First name is required')).toBeVisible();

    console.log("✅ PASS - First Name Number Validation Verified");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');

    console.log("✅ PASS - Registration Step Number Verified");


});