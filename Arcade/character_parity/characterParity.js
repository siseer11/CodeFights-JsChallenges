function characterParity(symbol) {
    symbol = Number(symbol);
    return isNaN(symbol)?'not a digit':(symbol%2==0?'even':'odd');
}