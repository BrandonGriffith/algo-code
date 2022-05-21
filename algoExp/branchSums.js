// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    const sumArr = [];
    getSums(root, 0, sumArr);
    return sumArr;
}

function getSums(node, sum, sumArr) {
    if (!node) return;
    sum = sum + node.value;
    if (!node.left && !node.right) {
        sumArr.push(sum);
        return;
    }
    getSums(node.left, sum, sumArr);
    getSums(node.right, sum, sumArr);
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;