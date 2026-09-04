const { test, expect } = require('@playwright/test');

const { LandingPage } = require('../../../pages/LandingPage');

test('Verify Header', async ({ page }) => {

    const landing = new LandingPage(page);

    await landing.openWebsite();

    //networkidle
    await page.waitForLoadState('networkidle');

    // Logo
    await expect(page.locator("img").first()).toBeVisible();

    await expect(page.getByText('Login', { exact: true })).toBeVisible();
    //await expect(page.getByText('Register', { exact: true })).toBeVisible();

    await page.waitForLoadState('networkidle');


    await expect(page.getByText(/All Verified Profile/i)).toBeVisible();

    //wait for 2 seconds
    await page.waitForTimeout(2000);

    await expect(
        page.getByRole('heading', { level: 1, name: /Jahaan dil milte hain, wahin se Kahaniyaan shuru hoti hain/i })).toBeVisible();

    const heroImages = page.locator("img");

    console.log(await heroImages.count());

    //Scroll the page
    await page.mouse.wheel(0,600);

    await page.waitForTimeout(1000);

    //wait for 2 seconds
    await page.waitForTimeout(2000);

    await expect(page.getByRole(/Find Your Special SomeOne /i)).toBeVisible();
    await expect(page.getByText(/FOLLOW THESE STEPS TO/i)).toBeVisible();

});