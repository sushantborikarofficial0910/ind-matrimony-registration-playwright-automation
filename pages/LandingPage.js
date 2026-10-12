const { baseUrl } = require('@utils/registrationData');

class LandingPage {

    constructor(page) {

        this.page = page;

        // Header
        this.logo = page.locator('img[alt*="logo"], img').first();
        this.loginBtn = page.getByRole('button', { name: /login/i });
        this.registerBtn = page.getByRole('button', { name: /register/i });

        // Hero
        this.heroSection = page.locator('section').first();
        this.heroHeading = page.getByText(/Jahaan dil milte/i);

        // Find Someone
        this.findSomeoneHeading = page.getByText(/Find Your Special/i);
        this.createCard = page.getByText('Create');
        this.selectCard = page.getByText('Select');
        this.connectCard = page.getByText('Connect');

        // About
        this.aboutHeading = page.getByText(/About IND Matrimony/i);

        // Moments
        this.momentsHeading = page.getByText(/Moments of Togetherness/i);

        // Download App
        this.downloadHeading = page.getByText(/Get the App Now/i);

        // Explore
        this.exploreHeading = page.getByText(/Explore Profiles/i);

        // Success Story
        this.successHeading = page.getByText(/Success Story/i);

        // Register Banner
        this.registerBanner = page.getByText(/Want to be our next success story/i);

        // Footer
        this.footer = page.locator('footer');
    }

    async openWebsite() {

        await this.page.goto(baseUrl);

        await this.page.waitForLoadState('networkidle');

    }

}

module.exports = { LandingPage };