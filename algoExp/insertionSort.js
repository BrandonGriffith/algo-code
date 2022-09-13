function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1])[array[j], array[j - 1]] = [array[j - 1], array[j]];
            count++;
        }
    }
    return array;
}
// Do not edit the line below.
exports.insertionSort = insertionSort;


let count = 0;
const arr = [9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 1, 2, 3, 9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 1, 2, 3];
console.log(insertionSort(arr), "number of loops", count);