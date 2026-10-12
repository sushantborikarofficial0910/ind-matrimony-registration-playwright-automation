const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
const { time, log } = require('node:console');

test('TC_070 - Change State After City Selection', async ({ page }) => {

    console.log("🚀 TC_070 Started");

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

    // Select State
    await page.getByText('Select State').click();

    const stateOption = page.getByText('Maharashtra', { exact: true });
    await stateOption.scrollIntoViewIfNeeded();
    await stateOption.click();

    console.log("✅ Maharashtra Selected");

    // Select City
    await page.getByText('Select City').click();

    const cityOption = page.getByText('Mumbai', { exact: true });
    await cityOption.scrollIntoViewIfNeeded();
    await cityOption.click();

    console.log("✅ Mumbai Selected");

    // Change State
    await page.getByText('Maharashtra', { exact: true }).click();

    const newState = page.getByText('Gujarat', { exact: true });
    await newState.scrollIntoViewIfNeeded();
    await newState.click();

    console.log("✅ State Changed to Gujarat");

    // Verify City field is reset
    await expect(page.getByText('Select City', { exact: true })).toBeVisible();

    console.log("✅ City field reset successfully");

    // Verify old city is not selected
    await expect(page.getByText('Mumbai', { exact: true })).not.toBeVisible();

    //verify validation message
    await expect(page.getByText('You may change or update this information anytime later from your profile settings.')).toBeVisible();
    console.log("✅ Validation displayed");

    //Verify Registration Step Number
    await expect(page.getByText('Step 3 of 3')).toBeVisible();
    console.log("✅ Registration Step Number Visible");
});