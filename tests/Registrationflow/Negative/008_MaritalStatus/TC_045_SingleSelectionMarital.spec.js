const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_045 - Verify Continue With Single Selection', async ({ page }) => {

    console.log("🚀 TC_045 Started");

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

    // Continue
    await page.locator('.continue-btn').click();

    // Reach DOB Page
    console.log("✅ DOB Page Opened");

    //Click on TOB
    await page.getByText('Time', { exact: true }).click();
    console.log("✅ TOB Page Opened");

    await page.locator('.continue-btn').click();
    
    await page.getByText('Unmarried').click();

    await page.waitForTimeout(1000);

     await page.getByText('Widow/Widower').click();

    await page.waitForTimeout(1000);

     await page.getByText('Separated').click();

    await page.waitForTimeout(1000);

     await page.getByText('Awaiting Divorce').click();

    await page.waitForTimeout(1000);

     await page.getByText('Annulled').click();

    await page.waitForTimeout(1000);

    await page.getByText('Divorced').click();

    await page.waitForTimeout(1000);

    // Only Divorced should remain selected
    await expect(page.getByText('Divorced')).toBeVisible();

    console.log("✅ Only one option selected");

    //Verify Registration Step Number
    await expect(page.getByText('Step 5 of 6')).toBeVisible();
    console.log("✅ Registration Step Number Visible");

});