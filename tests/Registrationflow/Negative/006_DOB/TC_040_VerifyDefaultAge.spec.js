const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');

test('TC_040 - Verify Default Age Displayed', async ({ page }) => {

    console.log("🚀 TC_040 Started");

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

        //email
        await page.getByRole('textbox').nth(2).fill('sushant.patil@example.com');

        // Invalid Alternate Mobile
        const alternateMobile = page.getByRole('textbox').nth(3);
    
        await alternateMobile.fill('9876543210');
    
        // Continue
        await page.locator('.continue-btn').click();

    // Reach DOB Page

    console.log("✅ DOB Page Opened");

    // Verify Heading
    await expect(page.getByText('Born?')).toBeVisible();

    // Verify Age Label
    await expect(page.getByText(/Your age:/)).toBeVisible();

    // Verify Registration Step Number
    await expect(page.getByText('Step 4 of 6')).toBeVisible();
    
    console.log("✅ PASS - Default Age Displayed");

});