const PerformanceManager = require('./PerformanceManager');

class PageTracker {

    static async measure(page, pageName, url) {

        const start = performance.now();

        await page.goto(url);

        await page.waitForLoadState('networkidle');

        const end = performance.now();

        const loadTime = (end - start).toFixed(2);

        let status = "PASS";

        if (loadTime > 3000)
            status = "SLOW";

        PerformanceManager.addResult(

            "Page",

            pageName,

            loadTime,

            status

        );

        console.log(
            `🚀 ${pageName} : ${loadTime} ms`
        );

    }

}

module.exports = PageTracker;