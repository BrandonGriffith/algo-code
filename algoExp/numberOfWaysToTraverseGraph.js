function numberOfWaysToTraverseGraph(width, height) {
    if (width == 1 || height == 1) return 1;
    return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
}
// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;


function numberOfWaysToTraverseGraph(width, height) {
    const ways = [];
    for (let i = 0; i <= height; i++) {
        ways.push([]);
        for (let j = 0; j <= width; j++) {
            ways[i].push(0);
        }
    }
    for (let row = 1; row <= width; row++) {
        for (let col = 1; col <= height; col++) {
            if (row == 1 || col == 1) {
                ways[col][row] = 1;
            } else {
                const left = ways[col][row - 1];
                const up = ways[col - 1][row];
                ways[col][row] = left + up;
            }
        }
    }
    return ways[height][width];
}
// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;


function numberOfWaysToTraverseGraph(width, height) {
    const ways = [];
    for (let i = 0; i <= height; i++) {
        ways.push([]);
        for (let j = 0; j <= width; j++) {
            ways[i].push(0);
        }
    }
    for (let row = 1; row <= width; row++) {
        for (let col = 1; col <= height; col++) {
            if (row == 1 || col == 1) {
                ways[col][row] = 1;
                continue;
            }
            const left = ways[col][row - 1];
            const up = ways[col - 1][row];
            ways[col][row] = left + up;
        }
    }
    return ways[height][width];
}
// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;


function numberOfWaysToTraverseGraph(width, height) {
    const rowSize = width - 1;
    const colSize = height - 1;
    const top = fact(rowSize + colSize);
    const bottom = fact(rowSize) * fact(colSize);
    return Math.floor(top / bottom);
}

function fact(num) {
    let total = 1;
    for (let i = 2; i <= num; i++) {
        total *= i;
    }
    return total;
}
// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;