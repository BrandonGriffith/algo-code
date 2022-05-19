function isValidSubsequence1(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length) {
        if (array[arrIdx] == sequence[seqIdx]) seqIdx++;
        if (seqIdx == sequence.length) return true;
        arrIdx++;
    }
    return false;
}



function isValidSubsequence(array, sequence) {
    let seqIdx = 0;
    for (let value of array) {
        if (value == sequence[seqIdx]) seqIdx++;
        if (seqIdx == sequence.length) return true;
    }
    return false;
}
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))