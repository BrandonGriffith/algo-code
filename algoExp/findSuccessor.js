// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node) {
    const cache = inOrder(tree);
    for (let [idx, currentNode] of cache.entries()) {
        if (currentNode != node) continue;
        if (idx >= cache.length - 1) return null;
        return cache[idx + 1];
    }
}

const inOrder = (node, cache = []) => {
    if (!node) return cache;
    inOrder(node.left, cache);
    cache.push(node);
    inOrder(node.right, cache);
    return cache;
}
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;