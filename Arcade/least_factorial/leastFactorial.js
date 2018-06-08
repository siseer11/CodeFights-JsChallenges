function leastFactorial(n) {
    let lastSum = 1;
    let lastFact = 2;
    while(lastSum < n){
        lastSum *= lastFact;
        lastFact++;
    }
    return lastSum;
}
