function threeNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    const sums = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let sum = array[i] + array[left] + array[right];
            if (sum === targetSum) {
                sums.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (sum < targetSum) left++;
            else if (sum > targetSum) right--;
        }
    }
    return sums;
}
// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;