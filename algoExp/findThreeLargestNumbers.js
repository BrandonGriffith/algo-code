function findThreeLargestNumbers(array) {
    array.sort((a, b) => a - b);
    return array.slice(array.length - 3, array.length);
}
// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;


function findThreeLargestNumbers(array) {
    const largeArr = [-Infinity, -Infinity, -Infinity];
    for (let num of array) {
        checkLarger(largeArr, num);
    }
    return largeArr;
}
const checkLarger = (arr, num) => {
    if (num > arr[2]) updateLargerArr(arr, num, 2);
    else if (num > arr[1]) updateLargerArr(arr, num, 1);
    else if (num > arr[0]) updateLargerArr(arr, num, 0);
}
const updateLargerArr = (arr, num, idx) => {
    for (let i = 0; i <= idx; i++) {
        if (i === idx) arr[i] = num;
        else arr[i] = arr[i + 1];
    }
}
// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;