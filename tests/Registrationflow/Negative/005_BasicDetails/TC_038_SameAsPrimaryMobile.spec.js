const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');

test('TC_038 - Alternate Mobile Same as Primary', async ({ page }) => {

    console.log("🚀 TC_038 Started");

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

    // Alternate Mobile
const alternateMobile = page.getByRole('textbox').nth(3);

// Enter Same Mobile Number
await alternateMobile.fill(mobile);

console.log(`✅ Entered Same Mobile Number in Alternate Mobile: ${mobile}`);

// Continue
await page.locator('.continue-btn').click();

// Verify Validation
await expect(
    page.getByText('Alternate mobile number cannot be same as registered mobile number')
).toBeVisible();

console.log("✅ PASS - Same as Primary Mobile Number Rejected");

//verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 3 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});