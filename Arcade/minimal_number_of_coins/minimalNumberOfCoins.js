function minimalNumberOfCoins(coins, price) {
    let nCoins = 0;
    while(price>0){
        let actualCoin = coins.pop()
        nCoins += Math.floor(price/actualCoin);
        price = price%actualCoin; 
    }
    return nCoins;
}
