const myNums = [1,9,7,2,5,6,3];
const myTarget =11;
const twoNumSum = (nums, tar) => {
    for (let i = 0; i < nums.length - 1; i++) {
        let firstNum = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            let secondNum = nums[j];
            if (firstNum + secondNum == tar) return [firstNum, secondNum];
        };
    };
    return [];
};
console.log(twoNumSum(myNums,myTarget));
const twoNumSumHash = (nums, tar) => {
    let hash = {};
    for (let i of nums) {
        if (hash[tar-i]) return [hash[tar-i],i];
        hash[i] = i;
    };
    return [];
};
console.log(twoNumSumHash(myNums,myTarget));