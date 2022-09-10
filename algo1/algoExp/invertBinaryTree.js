function invertBinaryTree(tree) {
    const cache = [tree];
    while (cache.length) {
        let node = cache.pop();
        if (!node) continue;
        [node.left, node.right] = [node.right, node.left];
        cache.push(node.left);
        cache.push(node.right);
    }
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;



function invertBinaryTree(tree) {
    if (!tree) return null;
    [tree.left, tree.right] = [tree.right, tree.left];
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;