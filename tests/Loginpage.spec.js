const { test, expect } = require('@playwright/test');

test("Login Page Speed Test", async ({ page }) => {

    // Open Website
    await page.goto("https://uat-app.inddevelopment.in/");

    // Login Navigation
    const loginStart = performance.now();

    await page.getByRole("link", { name: "Login" }).click();
    await page.waitForURL("**/otpLogin");

    const loginEnd = performance.now();

    console.log(`🚀 Login Page Load Time = ${(loginEnd - loginStart).toFixed(2)} ms`);

    // Mobile Textbox
    const mobileTextbox = page.getByPlaceholder("Mobile Number");
    await mobileTextbox.waitFor();

    // Get OTP Button (Visible but Disabled)
    const getOtpButton = page.getByRole("button", { name: "Get OTP" });

    await expect(getOtpButton).toBeDisabled();

    // Enter Mobile Number
    const enableStart = performance.now();

    await mobileTextbox.fill("9876543210");

    // Wait until button becomes enabled
    await expect(getOtpButton).toBeEnabled();

    const enableEnd = performance.now();

    console.log(
        `🔘 Get OTP Button Enabled Time = ${(enableEnd - enableStart).toFixed(2)} ms`
    );

});