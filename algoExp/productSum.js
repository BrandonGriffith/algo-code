// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
    let multi = 1;
    const helper = (arr, multi) => {
        let sum = 0;
        for (let i of arr) {
            if (Array.isArray(i)) {
                sum += helper(i, multi + 1)
            } else {
                sum += i
            }
        }
        return sum * multi;
    }
    return helper(array, multi);
}
// Do not edit the line below.
exports.productSum = productSum;