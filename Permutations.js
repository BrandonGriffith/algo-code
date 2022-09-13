/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute1 = (nums) => {
    const result = [];
    const helper = (nums, n) => {
        if (n === nums.length - 1) {
            result.push(nums.slice(0));
            return;
        }
        for (let i = n; i < nums.length; i++) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
            helper(nums, n + 1);
            [nums[i], nums[n]] = [nums[n], nums[i]];
        }
    }
    helper(nums, 0);
    return result;
};
console.log(permute1([1, 2, 3]));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
    const result = [];
    const helper = (nums, n) => {
        if (n === nums.length - 1) {
            result.push([...nums]);
            return;
        }
        for (let i = n; i < nums.length; i++) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
            helper(nums, n + 1);
            [nums[i], nums[n]] = [nums[n], nums[i]];
        }
    }
    helper(nums, 0);
    return result;
};
console.log(permute([1, 2, 3]));