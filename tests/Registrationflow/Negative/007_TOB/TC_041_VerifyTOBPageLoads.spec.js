const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
const { log } = require('node:console');

test('TC_041 - Verify TOB Page Displayed', async ({ page }) => {

    console.log("🚀 TC_041  Started");

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

        //email
        await page.getByRole('textbox').nth(2).fill('sushant.patil@example.com');

        // Invalid Alternate Mobile
        const alternateMobile = page.getByRole('textbox').nth(3);
    
        await alternateMobile.fill('9876543210');
    
        // Continue
        await page.locator('.continue-btn').click();

    // Reach DOB Page
    console.log("✅ DOB Page Opened");

    //Click on TOB
    await page.getByText('Time', { exact: true }).click();
    console.log("✅ TOB Page Opened");

    // Verify Heading
    //await expect(page.getByText('Birth Time')).toBeVisible();

    // Verify Instruction Text
    await expect(page.getByText('Birth time is used for horoscope matching and kundali generation. If not known, you may ask family members. This field is optional and you can proceed without it.')).toBeVisible();
    console.log("✅ Instruction Text Visible");
    // Verify Registration Step Number
    await expect(page.getByText('Step 4 of 6')).toBeVisible();
    console.log("✅ Registration Step Number Visible");
    
    console.log("✅ PASS - Time Page Displayed");

});