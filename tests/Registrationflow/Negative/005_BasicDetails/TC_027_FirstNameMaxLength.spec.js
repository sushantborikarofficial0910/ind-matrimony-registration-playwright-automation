const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_027 - First Name Maximum Length', async ({ page }) => {

    console.log("🚀 TC_027 Started");

    // Navigate to Basic Details Page
    await page.goto(baseUrl);
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    console.log("Generated Mobile:", mobile);
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.getByText('Self').click();
    await page.locator('.continue-btn').click();
    await page.getByText('I AM A MAN').click();
    await page.locator('.continue-btn').click();

    console.log("✅ Basic Details Page Opened");

    const firstName = page.getByRole('textbox').first();

    // Enter more than allowed characters
    await firstName.fill('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ');
    await page.locator('.continue-btn').click();
    await expect(page.getByText('First name must be maximum 50 characters')).toBeVisible();
    // Verify only 50 characters are accepted
    //await expect(firstName).toHaveValue('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWX');

    console.log("✅ PASS - First Name Maximum Length Verified");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});