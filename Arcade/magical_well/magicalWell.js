function magicalWell(a, b, n) {
    let total = 0;
    for(var i = 0; i < n ; i++){
        total += ((a+i) * (b+i));
    }
    return total;
}
