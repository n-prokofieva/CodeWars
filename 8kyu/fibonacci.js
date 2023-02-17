function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence
    let fib = [0, 1];
    for (let i = 1; i <= n; i++) {
        // Next fibonacci number = previous + one before previous
        fib.push(fib[i - 1] + fib[i]);
    }
    return fib[n - 1];
}
nthFibo(4);