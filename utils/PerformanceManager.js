class PerformanceManager {

    constructor() {
        this.results = [];
    }

    addResult(type, name, time, status = "PASS") {

        this.results.push({

            Type: type,
            Name: name,
            Time: time,
            Status: status,
            Timestamp: new Date().toLocaleString()

        });

    }

    getResults() {
        return this.results;
    }

    clear() {
        this.results = [];
    }

}

module.exports = new PerformanceManager();