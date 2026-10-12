const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_018 - Single Gender Selection', async ({ page }) => {

    console.log("🚀 TC_018  Started");

    // Navigate to Gender Page
    await page.goto(baseUrl);
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');
    await page.getByRole('button', { name: 'Verify' }).click();
    await page.getByText('Self').click();
    await page.locator('.continue-btn').click();

    console.log("✅ Gender Page Opened");

    const genderOptions = [
        'I AM A MAN',
        'I AM A WOMAN'
    ];

    for (const gender of genderOptions) {

        console.log(`Selecting : ${gender}`);

        const option = page.getByText(gender, { exact: true });

        await expect(option).toBeVisible();

        await option.click();

        console.log(`✅ ${gender} Selected Successfully`);

        await page.waitForTimeout(1000);

    }

    console.log("🎉 All Gender Options Verified Successfully");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 2 of 6');

    console.log("✅ PASS - Registration Step Number Verified");

});