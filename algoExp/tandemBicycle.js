function tandemBicycle(RSS, BSS, fastest) {
    let sum = 0;
    if (fastest) {
        RSS.sort((a, b) => a - b);
        BSS.sort((a, b) => b - a);
    } else {
        RSS.sort((a, b) => a - b);
        BSS.sort((a, b) => a - b);
    }
    for (let idx = 0; idx < RSS.length; idx++) {
        RSS[idx] > BSS[idx] ? sum += RSS[idx] : sum += BSS[idx];
    }
    return sum;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;