function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let waitTime = 0;
    for (let [idx, value] of queries.entries()) {
        waitTime += value * (queries.length - (idx + 1));
    }
    return waitTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;