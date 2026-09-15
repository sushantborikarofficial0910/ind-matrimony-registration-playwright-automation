const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_055 - Browser Back', async ({ page }) => {

    console.log("🚀 TC_055  Started");

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

    // Select Divorced
    await page.getByText('Unmarried', { exact: true }).click();

    // Click Continue
    await page.locator('.continue-btn').click();

    // Open Height Dropdown
    await page.getByText('Select Height').click();

    // Create locator
    const heightOption = page.getByText('7ft - 213.36cm Plus', { exact: true });

    // Scroll
    await heightOption.scrollIntoViewIfNeeded();

    // Click
    await heightOption.click();

    // Open Weight Dropdown
    await page.getByText('Select Weight (optional)').click();

    // Create locator
    const weightOption = page.getByText('60 - 65 kg', { exact: true });

    // Scroll
    await weightOption.scrollIntoViewIfNeeded();

    // Click
    await weightOption.click();

    //browser back
    await page.goBack();

    //Verify the text is displayed on the page
    await expect(page.getByText('Are you sure?')).toBeVisible();

    //Verify Registration Step Number
    await expect(page.getByText('Step 6 of 6')).toBeVisible();
    console.log("✅ Registration Step Number Visible");

});    