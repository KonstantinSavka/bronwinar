function fn(n) {
    if(n <= 1) {
        return n;
    } else {
        return fn(n - 1) + fn(n - 2);
    };
}

console.log(fn(6))
// Если пишу 150, ноут умирает...)