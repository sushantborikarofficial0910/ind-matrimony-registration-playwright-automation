const { baseUrl } = require('@utils/registrationData');

const { test, expect } = require('@playwright/test');
const { generateMobileNumber } = require('@utils/randomData');
test('TC_009 - Blank OTP', async ({ page }) => {

    // Navigate to OTP Page
    await page.goto(baseUrl);
    await page.getByRole('link', { name: 'Register' }).click();

    const mobile = generateMobileNumber();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill(mobile);

    await page.getByRole('button', { name: 'Get OTP' }).click();

    // OTP left blank

    const verifyButton = page.getByRole('button', { name: 'Verify' });

    await expect(verifyButton).toBeDisabled();

    console.log("✅ PASS - Verify button is disabled when OTP is blank");

});