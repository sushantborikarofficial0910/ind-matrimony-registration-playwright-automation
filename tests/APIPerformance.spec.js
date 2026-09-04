const { test } = require('@playwright/test');

const ApiTracker = require('../utils/ApiTracker');
const PageTracker = require('../utils/PageTracker');
const ElementTracker = require('../utils/ElementTracker');
const PerformanceManager = require('../utils/PerformanceManager');

test('Performance Test', async ({ page }) => {

    // Start tracking ALL APIs
    ApiTracker.startTracking(page);

    // Open page
    await PageTracker.measure(
        page,
        "Home Page",
        "https://uat-app.inddevelopment.in/"
    );

    // Measure important elements
    await ElementTracker.measure(
        page.getByRole('link', { name: 'Login' }),
        "Login Button"
    );

    await ElementTracker.measure(
        page.getByRole('link', { name: 'Register' }),
        "Register Button"
    );

    console.table(
        PerformanceManager.getResults()
    );

});