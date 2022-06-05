function minNumberOfCoinsForChange(n, denoms) {
    const minCoins = new Array(n + 1).fill(Infinity);
    minCoins[0] = 0;
    for (let denom of denoms) {
        for (let amount in minCoins) {
            if (denom <= amount) {
                minCoins[amount] = Math.min(minCoins[amount], 1 + minCoins[amount - denom]);
            }
        }
    }
    return minCoins[n] == Infinity ? -1 : minCoins[n];
}
// Do not edit the line below.

exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;