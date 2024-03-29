// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced;
        this.height = height;
    }
}

function heightBalancedBinaryTree(tree) {
    const helper = (node) => {
        if (!node) return new TreeInfo(true, -1);
        const left = helper(node.left);
        const right = helper(node.right);
        const isBalanced = left.isBalanced && right.isBalanced &&
            Math.abs(left.height - right.height) <= 1;
        const height = Math.max(left.height, right.height) + 1;
        return new TreeInfo(isBalanced, height);
    }
    return helper(tree).isBalanced;
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;


// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function heightBalancedBinaryTree(tree) {
    const helper = (node) => {
        if (!node) return [true, 0];
        const left = helper(node.left);
        const right = helper(node.right);
        const isBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
        const height = Math.max(left[1], right[1]) + 1;
        return [isBalanced, height]
    }
    return helper(tree)[0];
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;