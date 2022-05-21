function findClosestValueInBst(tree, target) {
    return helper(tree, target, Infinity);
}

function helper(tree, target, closest) {
    if (!tree) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) closest = tree.value;
    if (target < tree.value) return helper(tree.left, target, closest);
    if (target > tree.value) return helper(tree.right, target, closest);
    return closest;
}
// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;