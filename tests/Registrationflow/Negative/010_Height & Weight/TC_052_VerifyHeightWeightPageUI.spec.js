const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_052 - Verify Height & Weight Page UI', async ({ page }) => {

    console.log("🚀 TC_052 Started");

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

    // Mandatory Fields
    await page.getByRole('textbox').first().fill('Sushant');
    await page.getByRole('textbox').nth(1).fill('Patil');

    // Continue
    await page.locator('.continue-btn').click();

    // Reach DOB Page
    console.log("✅ DOB Page Opened");

    //Click on TOB
    await page.getByText('Time', { exact: true }).click();
    console.log("✅ TOB Page Opened");

    await page.locator('.continue-btn').click();
    
    await page.getByText('Unmarried').click();
    await page.locator('.continue-btn').click();

    // wait for 2 seconds
    await page.waitForTimeout(2000);

    // Verify Page Title
    await expect(page.getByText('Height', { exact: true })).toBeVisible();
    
    // Verify Height Dropdown
    await expect(page.getByText('Select Height')).toBeVisible();

    // Verify Weight Dropdown
    await expect(page.getByText('Select Weight (optional)')).toBeVisible();

    // Verify Continue Button
    await expect(page.locator('.continue-btn')).toBeVisible();

    // Verify Step Counter
    await expect(page.getByText('Step 6 of 6')).toBeVisible();

    console.log("✅ Height & Weight UI verified");
     

});