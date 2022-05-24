function longestPeak(array) {
    let peak = 0;
    let i = 1;
    while (i < array.length - 1) {
        let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
        if (!isPeak) {
            i++;
            continue
        }
        let leftIdx = i - 2;
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx--;
        let rightIdx = i + 2;
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) rightIdx++;
        let curPeak = rightIdx - leftIdx - 1;
        peak = Math.max(peak, curPeak);
        i = rightIdx;
    }
    return peak;
}
// Do not edit the line below.
exports.longestPeak = longestPeak;