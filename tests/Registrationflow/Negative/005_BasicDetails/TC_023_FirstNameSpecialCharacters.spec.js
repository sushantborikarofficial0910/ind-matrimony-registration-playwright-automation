const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_023 - First Name with Special Characters', async ({ page }) => {

    console.log("🚀 TC_023 Started");

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

    // First Name Field
    const firstName = page.getByRole('textbox').first();

    // Enter Special Characters
    await firstName.fill('@#$%^&*');

    // Verify only alphabets are accepted
    await expect(firstName).toHaveValue('');

    console.log("✅ PASS - Special Characters are not accepted in First Name");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});