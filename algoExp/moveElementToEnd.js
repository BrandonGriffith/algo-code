function moveElementToEnd(array, toMove) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        while (left < right && array[right] === toMove) right--;
        if (array[left] === toMove) {
            [array[left], array[right]] = [array[right], array[left]];
        }
        left++;
    }
    return array;
}
// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;