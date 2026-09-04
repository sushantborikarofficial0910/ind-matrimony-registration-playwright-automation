const PerformanceManager = require('./PerformanceManager');

class ElementTracker {

    static async measure(locator, elementName) {

        const start = performance.now();

        await locator.waitFor({
            state: 'visible'
        });

        const end = performance.now();

        const loadTime = (end - start).toFixed(2);

        let status = "PASS";

        if (loadTime > 1000)
            status = "SLOW";

        PerformanceManager.addResult(

            "Element",

            elementName,

            loadTime,

            status

        );

        console.log(
            `🟢 ${elementName} : ${loadTime} ms`
        );

    }

}

module.exports = ElementTracker;