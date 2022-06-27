/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
const maxScore = (C, K) => {
    let total = 0;
    for (let i = 0; i < K; i++) total += C[i];
    let best = total;
    let j = C.length - 1;
    for (let i = K - 1; i >= 0; i--) {
        total += C[j] - C[i];
        best = Math.max(best, total);
        j--;
    }
    return best;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));