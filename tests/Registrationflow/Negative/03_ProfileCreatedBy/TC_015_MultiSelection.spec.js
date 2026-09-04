const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_015 - Verify All Profile Options', async ({ page }) => {

    console.log("🚀 TC_015 Started");

    // Navigate to Profile Created By Page
    await page.goto('https://uat-app.inddevelopment.in/');
    await page.getByRole('link', { name: 'Register' }).click();
    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.getByRole('textbox', { name: 'Enter OTP' }).fill('123456');
    await page.getByRole('button', { name: 'Verify' }).click();

    console.log("✅ Profile Created By Page Opened");

    // Verify Validation Message
    await expect(page.getByText('Who Is Creating This Profile?')).toBeVisible();

    const profileOptions = [
        'Self',
        'Friends',
        'Sibling',
        'Father',
        'Mother',
        'Others'
    ];

    for (const option of profileOptions) {

        console.log(`Selecting : ${option}`);

        const profile = page.getByText(option, { exact: true });

        await expect(profile).toBeVisible();

        await profile.click();

        console.log(`✅ ${option} Selected Successfully`);

        await page.waitForTimeout(1000);

    }

    console.log("🎉 All Profile Options Verified Successfully");

    //verify registration step Number
    await expect(page.locator('.step-number')).toHaveText('Step 1 of 6');

    console.log("✅ PASS - Registration Step Number Verified");


});