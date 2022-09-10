function bubbleSort1(array) {
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
            count++;
        }
        if (sorted) return array;
        unsorted--;
    }
}
// Do not edit the line below.
exports.bubbleSort = bubbleSort;

let count = 0;
const arr = [9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 1, 2, 3, 9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 1, 2, 3];
console.log(bubbleSort(arr), "number of loops", count);