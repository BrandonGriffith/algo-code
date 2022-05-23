function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i])[array[i], array[j]] = [array[j], array[i]];
            count++;
        }
    }
    return array;
}
// Do not edit the line below.
exports.selectionSort = selectionSort;
let count = 0;
const arr = [9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 1, 2, 3, 9, 1, 8, 2, 7, 3, 6, 4, 5, 0, 1, 2, 3];
console.log(selectionSort(arr), "number of loops", count);