function nodeDepths(root) {
    let sum = 0;
    let stack = [{
        "node": root,
        "depth": 0
    }];
    while (stack[0]) {
        let node = stack.pop();
        let depth = node.depth;
        node = node.node;
        if (!node) continue;
        sum += depth;
        stack.push({
            "node": node.left,
            "depth": depth + 1
        });
        stack.push({
            "node": node.right,
            "depth": depth + 1
        });
    }
    return sum;
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
exports.nodeDepths = nodeDepths;


function nodeDepths(root) {
    let depth = 0;
    const helper = (root, depth) => {
        if (!root) return 0;
        return depth + helper(root.left, depth + 1) + helper(root.right, depth + 1);
    }
    return helper(root, depth);
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
exports.nodeDepths = nodeDepths;