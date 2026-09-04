const PerformanceManager = require('./PerformanceManager');

class ApiTracker {

    static requestMap = new Map();

    static startTracking(page) {

        page.on('request', request => {

            ApiTracker.requestMap.set(
                request,
                performance.now()
            );

        });

        page.on('response', response => {

            const request = response.request();

            const start =
                ApiTracker.requestMap.get(request);

            if (!start)
                return;

            const duration =
                (performance.now() - start).toFixed(2);

            let status = "PASS";

            if (duration > 1000)
                status = "SLOW";

            if (response.status() >= 400)
                status = "FAIL";

            PerformanceManager.addResult(

                "API",

                `${request.method()} ${new URL(response.url()).pathname}`,

                duration,

                status

            );

            console.log(
                `🌐 ${request.method()} ${new URL(response.url()).pathname} | ${duration} ms`
            );

        });

    }

}

module.exports = ApiTracker;