const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
const { time, log } = require('node:console');

test('TC_077 - Close State Dropdown', async ({ page }) => {

    console.log("🚀 TC_077 Started");

    // Navigate to Application
    await page.goto('https://uat-app.inddevelopment.in/');

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
    // -------------------------------
    await page.getByText('Select State').click();

    const stateOption = page.getByText('Maharashtra', { exact: true });

    await stateOption.scrollIntoViewIfNeeded();
    await stateOption.click();

    console.log("✅ State Selected");

    // Select City
    // -------------------------------
    await page.getByText('Select City').click();

    const cityOption = page.getByText('Nagpur', { exact: true });

    await cityOption.scrollIntoViewIfNeeded();
    await cityOption.click();

    console.log("✅ City Selected");

    // Continue
    await page.locator('.continue-btn').click();

    //wait 2 minutes
    await page.waitForTimeout(2000);    // 2 seconds

    await page.getByText('State *').click();

    console.log("✅ State dropdown opened");

    // Click outside dropdown
    await page.getByText(
        'Native place helps families understand your roots and cultural background, which is important for many matchmaking preferences.'
    ).click();

    console.log("✅ State dropdown closed");

    // Verify no state selected
    await expect(
        page.getByText('State *', {
            exact: true
        })
    ).toBeVisible();

    console.log("✅ State remains blank");

});