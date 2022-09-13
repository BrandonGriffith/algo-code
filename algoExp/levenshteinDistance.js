function levenshteinDistance(str1, str2) {
    const grid = [];
    for (let i = 0; i < str2.length + 1; i++) {
        const row = [];
        for (let j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        grid.push(row);
    }
    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length + 1; j++) {
            if (str2[i - 1] == str1[j - 1]) {
                grid[i][j] = grid[i - 1][j - 1];
            } else {
                grid[i][j] = 1 + Math.min(grid[i - 1][j - 1], grid[i - 1][j], grid[i][j - 1]);
            }
        }
    }
    return grid[str2.length][str1.length];
}
// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;