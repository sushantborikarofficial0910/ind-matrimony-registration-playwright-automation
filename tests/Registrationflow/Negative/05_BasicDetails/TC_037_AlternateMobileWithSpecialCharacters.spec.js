const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');

test('TC_037 - Alternate Mobile With Special Characters', async ({ page }) => {

    console.log("🚀 TC_037 Started");

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

    // Mandatory Fields
    await page.getByRole('textbox').first().fill('Sushant');
    await page.getByRole('textbox').nth(1).fill('Patil');

    const alternateMobile = page.getByRole('textbox').nth(3);

    await alternateMobile.fill('98@#$12345');

    // Verify special characters are rejected
    await expect(alternateMobile).toHaveValue('9812345');

    // Continue
    await page.locator('.continue-btn').click();

    console.log("✅ PASS - Special Characters Rejected");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});