function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    const helper = (arr, t) => {
        if (left > right) return -1;
        let middle = Math.floor((left + right) / 2);
        if (arr[middle] == t) return middle;
        else if (arr[middle] > t) right = middle - 1;
        else if (arr[middle] < t) left = middle + 1;
        return helper(arr, t);
    }
    return helper(array, target);
}

// Do not edit the line below.
exports.binarySearch = binarySearch;