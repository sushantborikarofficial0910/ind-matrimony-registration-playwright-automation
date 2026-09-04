const { test, expect } = require('@playwright/test');

test('Step 1 - Login and OTP Verification', async ({ page }) => {

    // Open Website
    await page.goto('https://uat-app.inddevelopment.in/');

    // Click Login
    await page.getByRole('link', { name: 'Login' }).click();

    // Enter Mobile Number
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('5432345434');

    // Click Get OTP
    await page.getByRole('button', { name: 'Get OTP' }).click();

    await page.waitForTimeout(2000); // Wait for 2 seconds before entering OTP

    // Enter OTP
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');

    // Click Verify
    await page.getByRole('button', { name: 'Verify' }).click();

    // Wait for next page to load
    await page.waitForLoadState('networkidle');

    console.log('✅ Step 1 completed successfully');
});