const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
const { time } = require('node:console');

test('TC_066 - Select Blank City', async ({ page }) => {

    console.log("🚀 TC_066 Started");

    // Navigate to Application
    await page.goto(baseUrl);

    // Registration Flow
    await page.getByRole('link', { name: 'Register' }).click();

    const mobile = generateMobileNumber();

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();

    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');
    await page.getByRole('button', { name: 'Verify' }).click();

    await page.getByText('Self').click();
    await page.locator('.continue-btn').click();

    await page.getByText('I AM A MAN').click();
    await page.locator('.continue-btn').click();

    // Basic Details
    await page.getByRole('textbox').first().fill('Sushant');
    await page.getByRole('textbox').nth(1).fill('Patil');
    await page.locator('.continue-btn').click();

    // DOB
    await page.getByText('Time', { exact: true }).click();
    await page.locator('.continue-btn').click();

    // Marital Status
    await page.getByText('Unmarried', { exact: true }).click();
    await page.locator('.continue-btn').click();

    // Height
    await page.getByText('Select Height').click();
    await page.getByText('5ft 8in - 172.72cm', { exact: true }).click();

    await page.locator('.continue-btn').click();

    //open education dropdown
    await page.getByText('Select Education').click();

    const EducationOption = page.getByText('DArc', { exact: true });

    // Scroll
    await EducationOption.scrollIntoViewIfNeeded();

    // Click
    await EducationOption.click();

    //Click Continue
    await page.locator('.continue-btn').click();

    //Profession Page
    await expect(page.getByText('Adding this information improves profile completeness and increases chances of receiving relevant matches.', { exact: true })).toBeVisible();
    console.log("✅ Profession Page Opened");

    //Select Profession
    await page.getByText('Select Profession').click();
    const ProfessionOption = page.getByText('CxO', { exact: true });

    // Scroll
    await ProfessionOption.scrollIntoViewIfNeeded();

    // Click
    await ProfessionOption.click();

    //Select Income
    await page.getByText('Select Income').click();
    const IncomeOption = page.getByText('1 crore & above', { exact: true });

    // Scroll
    await IncomeOption.scrollIntoViewIfNeeded();

    // Click
    await IncomeOption.click();

    //Click Continue
    await page.locator('.continue-btn').click();

    //wait 2 minutes
    await page.waitForTimeout(2000);    // 2 seconds

    console.log("✅ Current Residence Page Opened");

    // ==========================
    // Test Case
    // Leave State Blank
    // ==========================

    // Select State
    await page.getByText('Select State').click();

    const StateOption = page.getByText('Maharashtra', { exact: true });

    await StateOption.scrollIntoViewIfNeeded();
    await StateOption.click();


    // Click Continue without Selecting City
    await page.locator('.continue-btn').click();


    // Verify validation message
    await expect(page.getByText('Please select city')).toBeVisible();

    //verify validation message
    await expect(page.getByText('You may change or update this information anytime later from your profile settings.')).toBeVisible();
    console.log("✅ Validation displayed for blank State");

    //Verify Registration Step Number
    await expect(page.getByText('Step 3 of 3')).toBeVisible();
    console.log("✅ Registration Step Number Visible");

});