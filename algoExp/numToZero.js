/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let count = 0;
    while (num) {
        count += 1;
        if (num % 2) num -= 1;
        else num = Math.floor(num / 2);
    }
    return count;
};

console.log(numberOfSteps(14));