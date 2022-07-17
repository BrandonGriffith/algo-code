// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let cNode = this;
        while (true) {
            if (value < cNode.value) {
                if (cNode.left == null) {
                    cNode.left = new BST(value);
                    break;
                } else cNode = cNode.left;
            } else {
                if (cNode.right == null) {
                    cNode.right = new BST(value);
                    break;
                } else cNode = cNode.right;
            }
        }
        return this;
    }

    contains(value) {
        let cNode = this;
        while (cNode) {
            if (value < cNode.value) cNode = cNode.left;
            else if (value > cNode.value) cNode = cNode.right;
            else return true;
        }
        return false;
    }

    remove(value, pNode = null) {
        let cNode = this;
        while (cNode) {
            if (value < cNode.value) {
                pNode = cNode;
                cNode = cNode.left;
            } else if (value > cNode.value) {
                pNode = cNode;
                cNode = cNode.right;
            } else {
                if (cNode.left && cNode.right) {
                    cNode.value = cNode.right.getMinVal();
                    cNode.right.remove(cNode.value, cNode);
                } else if (!pNode) {
                    if (cNode.left) {
                        cNode.value = cNode.left.value;
                        cNode.right = cNode.left.right;
                        cNode.left = cNode.left.left;
                    } else if (cNode.right) {
                        cNode.value = cNode.right.value;
                        cNode.left = cNode.right.left;
                        cNode.right = cNode.right.right;
                    }
                } else if (pNode.left == cNode) {
                    pNode.left = cNode.left ? cNode.left : cNode.right;
                } else if (pNode.right == cNode) {
                    pNode.right = cNode.left ? cNode.left : cNode.right;
                }
                break;
            }
        }
        return this;
    }
    getMinVal() {
        let cNode = this;
        while (cNode.left) cNode = cNode.left;
        return cNode.value;
    }
}
exports.BST = BST;