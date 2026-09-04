const { test, expect } = require('@playwright/test');

const { LandingPage } = require('../pages/LandingPage');
const { LoginPage } = require('../pages/LoginPage');
const { OTPPage } = require('../pages/OTPPage');
const { NamePage } = require('../pages/NamePage');

const data = require('../utils/registrationData');

test('Positive Registration', async ({ page }) => {

    const landingPage = new LandingPage(page);
    const loginPage = new LoginPage(page);
    const otpPage = new OTPPage(page);
    const namePage = new NamePage(page);

    await landingPage.openWebsite();
    await landingPage.clickLogin();

    await loginPage.enterMobile(data.mobile);
    await loginPage.clickGetOTP();
    await loginPage.clickOK();

    await otpPage.verifyOTP(data.otp);

});