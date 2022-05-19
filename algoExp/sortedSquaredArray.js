function sortedSquaredArray1(array) {
    const arr = [...array]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr.sort(function (a, b) {
        return a - b;
    });
}



function sortedSquaredArray2(array) {
    const arr = [...array]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr.sort((a, b) => a - b);
}

function sortedSquaredArray(array) {
    const arr = [...array];
    let left = 0;
    let right = arr.length - 1;
    let idx = arr.length - 1;
    for (let i of array) {
        if (array[left] * array[left] <= array[right] * array[right]) {
            arr[idx] = array[right] * array[right];
            right--;
            idx--;
        } else if (array[left] * array[left] > array[right] * array[right]) {
            arr[idx] = array[left] * array[left];
            left++;
            idx--;
        }
        if (left == right) {
            arr[idx] = array[left] ** 2;
        }
    }
    return arr;
}
console.log(sortedSquaredArray([-1, -1, 2, 3, 3, 3, 4]))