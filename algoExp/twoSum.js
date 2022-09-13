function twoNumberSum1(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        let firstNum = array[i];
        for (let j = array.length - 1; j > i; j--) {
            let secondNum = array[j];
            if (firstNum + secondNum == targetSum) return [firstNum, secondNum];
        }
    }
    return [];
}



function twoNumberSum2(array, targetSum) {
    let nums = {};
    for (let i of array) {
        if (nums[targetSum - i]) return [targetSum - i, i];
        nums[i] = true;
    }
    return [];
}



function twoNumberSum(array, targetSum) {
    array.sort(function (a, b) {
        return a - b
    });
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        let sum = array[left] + array[right];
        if (sum == targetSum) return [array[left], array[right]];
        else if (sum < targetSum) left++;
        else if (sum > targetSum) right--;
    }
    return [];
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));