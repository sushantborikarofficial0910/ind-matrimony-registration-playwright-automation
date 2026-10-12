const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');

test('Positive Registration Flow', async ({ page }) => {

    // Step 1 - Login
    await page.goto(baseUrl);

    await page.getByRole('link', { name: 'Register' }).click();

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('3393511914');

    await page.getByRole('button', { name: 'Get OTP' }).click();

    await page.waitForTimeout(2000); // Wait for 2 seconds before entering OTP

    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');

    await page.getByRole('button', { name: 'Verify' }).click();

    console.log('✅ Account Created successfully');

    // Wait until Profile For page loads
    await expect(page.getByText('Self')).toBeVisible();

    // Select "Self"
    await page.getByText('Self').click();

    // Click Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Profile Created By Selected successfully');

    // Verify Gender page is displayed
    await expect(page.getByText('Choose your gender.')).toBeVisible();

    // Select Gender
    await page.getByText('I AM A WOMAN').click();
    // OR use:
    // await page.getByText('I AM A MAN').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Gender Selected successfully');

    // Verify Name page
    await expect(page.getByRole('textbox').first()).toBeVisible();

    // Enter First Name
    await page.getByRole('textbox').first().fill('Sushant');

    // Enter Last Name
    await page.getByRole('textbox').nth(1).fill('Patil');

    // Click Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Basic Details Entered successfully');

    await page.waitForTimeout(2000); // Wait for 2 seconds before entering DOB

    // Verify DOB Page
    await expect(page.locator('.continue-btn')).toBeVisible();

    // Continue
    await page.locator('.continue-btn').click();

    await page.waitForTimeout(2000); // Wait for 2 seconds before entering DOB

    //TOB Time
    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ DOB and TOB Entered successfully');

    // Verify Marital Status Page
    await expect(page.getByText('Divorced')).toBeVisible();

    // Select Divorced
    await page.getByText('Divorced').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Marital Status Selected successfully');

    // Verify Children Page
    await expect(page.getByText('Number of Children')).toBeVisible();

    // Select Number of Children
    await page.getByText('1', { exact: true }).click();

    // Select Living Status
    await page.getByText('Living with me', { exact: true }).click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Children Details Entered successfully');


    // Verify Height Page
    await expect(page.getByText('Select Height')).toBeVisible();

    // Open Height Dropdown
    await page.getByText('Select Height').click();

    // Select Height
    await page.getByText('4ft 5in - 134.62cm', { exact: true }).click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Height Selected successfully');

    // Verify Education Page
    await expect(page.getByText('Select Education')).toBeVisible();

    // Select Education
    await page.getByText('Select Education').click();

    await page.getByText('A.M.I.E').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Education Selected successfully');

    // Verify Profession Page
    await expect(page.getByText('Select Profession')).toBeVisible();

    // Select Profession
    await page.getByText('Select Profession').click();

    await page.getByText('Account Manager').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Profession Selected successfully');

    // Verify Income Page
    await expect(page.getByText('Select Income (LPA)')).toBeVisible();

    // Select Income
    await page.getByText('Select Income (LPA)').click();

    await page.getByText('0 - 1 Lakh').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Income Selected successfully');

     //Residing State and City
    // Verify State Dropdown
    await expect(page.getByText('Select State')).toBeVisible();

    // Select State
    await page.getByText('Select State').click();

    await page.getByText('Andhra Pradesh').click();

    // Select City
    await page.getByText('Select City').click();

    await page.getByText('Amaravati').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Residing State and City Selected successfully');


    // Verify Native Address Page
    await expect(page.getByText('State *')).toBeVisible();

    // Select Native State
    await page.locator('div').filter({ hasText: /^State \*$/ }).nth(2).click();

    await page.getByText('Arunachal Pradesh').click();

    // Select Native City
    await page.locator('div').filter({ hasText: /^City \*$/ }).nth(2).click();

    await page.getByText('Central Siang').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Native State and City Selected successfully');

    // Verify Community Page
    await expect(page.getByText('Select Domain')).toBeVisible();

    // Select Domain
    await page.getByText('Select Domain *').click();
    await page.getByText('Bengali').click();

    // Select Religion
    await page.getByText('Select Religion *').click();
    await page.getByText('Hindu').click();

    // Select Caste
    await page.getByText('Select Caste *').click();
    await page.getByText('Agri').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Community Details Selected successfully');

    // Verify Physical Status Page
    await expect(page.getByText('Normal')).toBeVisible();

    // Select Physical Status
    await page.getByText('Normal').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Physical Status Selected successfully');

    // Verify Body Type Page
    await expect(page.getByText('Average')).toBeVisible();

    // Select Body Type
    await page.getByText('Average').click();

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Body Type Selected successfully');

    // Verify Complexion Page
    await expect(page.getByText('Complexion Details')).toBeVisible();

    // Select Complexion
    await page.getByText('Very Fair').click();

    // Continue
    await page.locator('.continue-btn').click();
    console.log('✅ Complexion Selected successfully');

    await page.waitForTimeout(2000); // Wait for 2 seconds 

    // Verify Eating Habit Page
    //await expect(page.getByText('Eating Habits')).toBeVisible();

    // // Select Diet
    // await page.locator('.lifestyle-options').nth(0).click();

    // // Select Drinking Habit
    // //await page.getByText('Light / Social drinker').click();
    // await page.locator('.lifestyle-options').nth(1).click();

    // // Select Smoking Habit
    // //await page.getByText('Regular Smoker').click();
    // await page.locator('.lifestyle-options').nth(3).click();

    // // Continue
    // await page.locator('.continue-btn').click();

    //Skip Eating Habit Page
    await page.getByText('Skip').click();
    console.log('✅ Eating Habit Skipped successfully');

    // Verify Family Details Page
    await expect(page.getByRole('textbox', { name: 'Enter father’s name' })).toBeVisible();

    // Enter Father's Name
    await page.getByRole('textbox', { name: 'Enter father’s name' }).fill('Ramesh');

    // Enter Mother's Name
    await page.getByRole('textbox', { name: 'Enter mother’s name' }).fill('Sunita');

    // Continue
    await page.locator('.continue-btn').click();

    console.log('✅ Family Details Entered successfully');


    // Select Family Values
    await page.getByText('Conservative').click();
    console.log('✅ Family Values Selected successfully');

    // Select Family Type
    await page.getByText('Nuclear Family').click();
    console.log('✅ Family Type Selected successfully');

    // Select Family Status
    await page.getByText('Rich / Affluent').click();
    console.log('✅ Family Status Selected successfully');

    // Continue
    await page.locator('.continue-btn').click();


    // Verify Sibling Details Page
    await expect(page.getByRole('button', { name: '+' }).first()).toBeVisible();

    // Brothers
    await page.getByRole('button', { name: '+' }).first().click();

    // Married Brothers
    await page.getByRole('button', { name: '+' }).nth(1).click();

    // Sisters
    await page.getByRole('button', { name: '+' }).nth(2).click();

    // Married Sisters
    await page.getByRole('button', { name: '+' }).nth(3).click();

    // Continue
    await page.locator('.continue-btn').click();
    console.log('✅ Sibling Details Entered successfully');


    await page.locator('.continue-btn').click(); // Age Preference

    await page.locator('.continue-btn').click(); // Height Preference

    //wait 2 minutes
    await page.waitForTimeout(2000);    // 2 seconds

    await page.locator('.continue-btn').click(); // Education Preference

    //wait 2 minutes
    await page.waitForTimeout(2000);    // 2 seconds

    await page.locator('.continue-btn').click(); // Profession Preference

    //wait 2 minutes
    await page.waitForTimeout(2000);    // 2 seconds

    await page.locator('.continue-btn').click(); // Registration Complete


    console.log('✅ Registration Completed Successfully');

});