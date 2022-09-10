function nonConstructibleChange(coins) {
    coins = coins.sort((a, b) => a - b);
    let change = 1;
    for (let coin of coins) {
        if (coin > change) return change;
        change += coin;
    }
    return change;
}