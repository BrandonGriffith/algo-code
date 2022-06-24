function hasSingleCycle(array) {
    let visited = 0;
    let idx = 0;
    while (visited < array.length) {
        if (visited > 0 && !idx) return false;
        visited++;
        idx = getNextIdx(idx, array);
    }
    return idx == 0;
}
const getNextIdx = (idx, array) => {
    const nextIdx = (idx + array[idx]) % array.length;
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;