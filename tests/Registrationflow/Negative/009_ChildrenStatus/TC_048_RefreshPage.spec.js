const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_048 - Refresh Page', async ({ page }) => {

    console.log("🚀 TC_048 Started");

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
    
    await page.getByText('divorced').click();

    await page.locator('.continue-btn').click();

    //wait for 2 seconds
    await page.waitForTimeout(2000);

    await expect(page.getByText('Number of Children')).toBeVisible();

    //Select any option from the Children Status Page
    await page.getByText('1', { exact: true }).click();

    //Verify the text is displayed on the page
    await expect(page.getByText('Children living Status')).toBeVisible();

    //select children living status option
    await page.getByText('Living with me', { exact: true }).click();

    await page.locator('.continue-btn').click();

    await page.reload();
     
    //Verify Registration Step Number
    await expect(page.getByText('Step 5 of 6')).toBeVisible();
    console.log("✅ Registration Step Number Visible");

});