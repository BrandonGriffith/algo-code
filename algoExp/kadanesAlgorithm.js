function kadanesAlgorithm(array) {
    let maxTemp = array[0];
    let maxTotal = array[0];
    for (let i = 1; i < array.length; i++) {
        maxTemp = Math.max(array[i], maxTemp + array[i]);
        maxTotal = Math.max(maxTotal, maxTemp);
    }
    return maxTotal;
}
// Do not edit the line below.

exports.kadanesAlgorithm = kadanesAlgorithm;