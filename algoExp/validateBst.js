// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    let minVal = -Infinity;
    let maxVal = Infinity;
    const helper = (tree, minVal, maxVal) => {
        if (!tree) return true;
        if (tree.value < minVal || tree.value >= maxVal) return false;
        let leftIsValid = helper(tree.left, minVal, tree.value);
        let rightIsValid = helper(tree.right, tree.value, maxVal);
        return leftIsValid && rightIsValid;
    }
    return helper(tree, minVal, maxVal);
}
// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;