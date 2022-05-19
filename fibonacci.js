const fibonacci = (num) => {
    return num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(8))

let count = 0;

const fibonacci2 = (num) => {
    count++;
    if (num < 2) return num;
    return fibonacci2(num - 1) + fibonacci2(num - 2);
}
console.log(fibonacci2(8) + " number of times run --> " + count);

const mainFib = () => {
    let cache = {};
    return fib = (num) => {
        if (num < 2) return num;
        if (num in cache) return cache[num];
        cache[num] = fib(num - 1) + fib(num - 2);
        console.log(cache)
        return cache[num]
    }
}
const fastFib = mainFib();

console.log(fastFib(8));