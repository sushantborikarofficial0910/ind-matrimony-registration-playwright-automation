import { test, expect } from "@playwright/test";

test("Measure Register Page Load Time", async ({ page }) => {
  await page.goto("http://uat-app.inddevelopment.in/"); // Apni app ka URL

  const registerStart = performance.now();

  await page.getByRole("link", { name: "Register" }).click();

  await page.waitForURL("**/otpLogin?mode=register");

  const registerEnd = performance.now();

  console.log(
    `🚀 Register Page Load Time = ${(registerEnd - registerStart).toFixed(2)} ms`
  );

  // Mobile Textbox
  const mobileStart = performance.now();

const mobileTextbox =
    page.getByPlaceholder("Mobile Number");

await mobileTextbox.waitFor();

const mobileEnd = performance.now();

console.log(
    `📱 Mobile Textbox = ${(mobileEnd-mobileStart).toFixed(2)} ms`
);

// Get OTP Button (Visible but Disabled)
const getOtpButton = page.getByRole("button", {
  name: "Get OTP",
});

await expect(getOtpButton).toBeDisabled();

const enableStart = performance.now();

await mobileTextbox.fill("9876513210");

await expect(getOtpButton).toBeEnabled();

const enableEnd = performance.now();

console.log(
  `🟢 Get OTP Button Enable Time = ${(enableEnd - enableStart).toFixed(2)} ms`
);

// Click Get OTP Button
const clickStart = performance.now();

await getOtpButton.click();

const clickEnd = performance.now();

console.log(
  `⚡ Get OTP Click Time = ${(clickEnd - clickStart).toFixed(2)} ms`
);

});

