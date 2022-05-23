function bubbleSort(array) {
    let unsorted = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < unsorted; j++) {
            if (array[j] > array[j + 1])[array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
        unsorted--;
    }
    return array;
}
// Do not edit the line below.
exports.bubbleSort = bubbleSort;


function bubbleSort(array) {
    let sorted = false;
    let unsorted = array.length - 1;
    for (let i = 0; i < array.length; i++) {
        sorted = true;
        for (let j = 0; j < unsorted; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                sorted = false;
            }
        }
        if (sorted) return array;
        unsorted--;
    }
}
// Do not edit the line below.
exports.bubbleSort = bubbleSort;