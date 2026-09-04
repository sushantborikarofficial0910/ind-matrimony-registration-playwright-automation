const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_028 - Last Name Maximum Length', async ({ page }) => {

    console.log("🚀 TC_028 Started");

    // Navigate to Basic Details Page
    await page.goto('https://uat-app.inddevelopment.in/');
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

    const lastName = page.getByRole('textbox').nth(1);

    // Enter more than allowed characters
    await lastName.fill('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ');
    await page.locator('.continue-btn').click();
    await expect(page.getByText('Last name must be maximum 50 characters')).toBeVisible();

    // Verify only 50 characters are accepted
    //await expect(lastName).toHaveValue('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWX');

    console.log("✅ PASS - Last Name Maximum Length Verified");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});