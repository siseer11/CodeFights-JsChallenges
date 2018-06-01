function houseOfCats(legs) {
    let ppl = [];
    while(legs >= 0){
        ppl.unshift(legs/2);
        legs -= 4;        
    }
    return ppl;
}
