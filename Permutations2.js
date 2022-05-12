/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
    const result = [];
    const perm = [];
    let mapper = {};
    for (let i of nums) {
        if (mapper[i]) mapper[i] += 1;
        else mapper[i] = 1;
    }
    const helper = (nums) => {
        if (perm.length == nums.length) {
            result.push([...perm]);
            return;
        }
        for (let n in mapper) {
            if (mapper[n] > 0) {
                perm.push(n * 1);
                mapper[n] -= 1;
                helper(nums);
                mapper[n] += 1;
                perm.pop();
            }
        }
    }
    helper(nums);
    return result;
};
console.log(permuteUnique([1, 1, 2]));