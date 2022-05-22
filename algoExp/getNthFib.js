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