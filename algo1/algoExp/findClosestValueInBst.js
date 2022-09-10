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

function findClosestValueInBst(tree, target) {
    return helper(tree, target, Infinity);
}

function helper(tree, target, closest) {
    if (!tree) return closest;
    if ((target - closest) ** 2 > (target - tree.value) ** 2) closest = tree.value;
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


function findClosestValueInBst(tree, target) {
    return helper(tree, target, tree.value);
}

function helper(node, target, closest) {
    while (node) {
        if ((target - closest) ** 2 > (target - node.value) ** 2) closest = node.value;
        if (target < node.value) node = node.left;
        else if (target > node.value) node = node.right;
        else break;
    }
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