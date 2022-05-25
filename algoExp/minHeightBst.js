function minHeightBst(array) {
    const helper = (arr, left, right, bst) => {
        if (right < left) return;
        let mid = Math.floor((left + right) / 2);
        let value = arr[mid];
        if (!bst) bst = new BST(value);
        else bst.insert(value);
        helper(arr, left, mid - 1, bst);
        helper(arr, mid + 1, right, bst);
        return bst;
    }
    return helper(array, 0, array.length - 1, null);
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