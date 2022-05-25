// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findKthLargestValueInBst(tree, k) {
    let nodeCount = 0;
    let lastNode = null;
    const helper = (node) => {
        if (!node || nodeCount >= k) return;
        helper(node.right);
        if (nodeCount < k) {
            nodeCount++;
            lastNode = node.value;
            helper(node.left);
        }
        return lastNode;
    }
    return helper(tree);
}
// Do not edit the lines below.
exports.BST = BST;
exports.findKthLargestValueInBst = findKthLargestValueInBst;