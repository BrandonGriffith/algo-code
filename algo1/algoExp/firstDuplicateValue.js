function firstDuplicateValue(array) {
    let dup = {};
    for (let i = 0; i < array.length; i++) {
        if (dup[array[i]]) return array[i];
        else dup[array[i]] = 1;
    }
    return -1;
}
// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;