var getTargetCopy = function (original, cloned, target) {

    function traverse(oNode, cNode) {
        if (!oNode) return;
        if (oNode === target) return cNode;
        return traverse(oNode.left, cNode.left) || traverse(oNode.right, cNode.right);
    }
    return traverse(original, cloned);
};

var getTargetCopy = function (original, cloned, target) {

    let queue = [
        [original, cloned]
    ];

    while (queue.length) {
        const next = [];

        for (let [oNode, cNode] of queue) {
            if (oNode === target) return cNode;
            if (oNode.left) next.push([oNode.left, cNode.left]);
            if (oNode.right) next.push([oNode.right, cNode.right]);
        }
        queue = next;
    }
};