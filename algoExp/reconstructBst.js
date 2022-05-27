// This is an input class. Do not edit.
class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function reconstructBst(preOrderTraversalValues) {
    let rootIdx = 0;
    const helper = (low, high) => {
        if (rootIdx === preOrderTraversalValues.length) return null;
        const rootValue = preOrderTraversalValues[rootIdx];
        if (rootValue < low || rootValue >= high) return null;
        rootIdx++;
        const left = helper(low, rootValue);
        const right = helper(rootValue, high);
        return new BST(rootValue, left, right);
    }
    return helper(-Infinity, Infinity);
}
// Do not edit the lines below.
exports.BST = BST;
exports.reconstructBst = reconstructBst;