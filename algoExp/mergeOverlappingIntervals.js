function mergeOverlappingIntervals(array) {
    array.sort((a, b) => a[0] - b[0]);
    const merge = [];
    let cur = array[0];
    merge.push(cur);
    for (let i of array) {
        if (cur[1] >= i[0]) cur[1] = Math.max(cur[1], i[1]);
        else {
            cur = i;
            merge.push(cur)
        }
    }
    return merge;
}
// Do not edit the line below.
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;