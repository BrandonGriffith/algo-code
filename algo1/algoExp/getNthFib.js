function getNthFib(n) {
    let cache = {
        1: 0,
        2: 1
    };
    const fib = (n) => {
        if (n in cache) return cache[n];
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }
    return fib(n);
}
// Do not edit the line below.
exports.getNthFib = getNthFib;


function getNthFib(n) {
    const cache = [0, 1];
    for (let i = 3; i <= n; i++) {
        let nextFib = cache[0] + cache[1];
        cache[0] = cache[1];
        cache[1] = nextFib;
    }
    return n < 2 ? cache[0] : cache[1];
}
// Do not edit the line below.
exports.getNthFib = getNthFib;