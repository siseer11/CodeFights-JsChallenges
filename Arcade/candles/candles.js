function candles(candlesNumber, makeNew) {
    let total = candlesNumber;
    while(candlesNumber-makeNew >= 0){
        total += Math.floor(candlesNumber/makeNew);
        candlesNumber = Math.floor(candlesNumber/makeNew) + candlesNumber%makeNew;
    }
    return total;
}