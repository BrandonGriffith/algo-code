function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);
    let idx = 0;
    let idy = 0;
    let small = Infinity;
    let cur = Infinity;
    let result = [];
    while (idx < arrayOne.length && idy < arrayTwo.length) {
        let numx = arrayOne[idx];
        let numy = arrayTwo[idy];
        if (numx < numy) {
            cur = numy - numx;
            idx++;
        } else if (numx > numy) {
            cur = numx - numy;
            idy++;
        } else return [numx, numy];
        if (small > cur) {
            small = cur;
            result = [numx, numy];
        }
    }
    return result;
}
// Do not edit the line below.
exports.smallestDifference = smallestDifference;