function minHeightBst(array) {
    const helper = (left, right) => {
        if (left > right) return null;
        let mid = Math.floor((left + right) / 2);
        let node = new BST(array[mid]);
        node.left = helper(left, mid - 1);
        node.right = helper(mid + 1, right);
        return node;
    }
    return helper(0, array.length - 1);
}
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new BST(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new BST(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}
// Do not edit the line below.
exports.minHeightBst = minHeightBst;