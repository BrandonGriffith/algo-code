function isMonotonic(array) {
    let isNotUp = true;
    let isNotDown = true;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] < array[i]) {
            isNotDown = false;
        }
        if (array[i + 1] > array[i]) {
            isNotUp = false;
        }
    }
    return isNotUp || isNotDown;
}
// Do not edit the line below.
exports.isMonotonic = isMonotonic;