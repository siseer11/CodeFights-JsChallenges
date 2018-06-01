function stringsConstruction(a, b) {
    let xTimes = 0;
    [a,b]=[a.split(''),b.split('')]
    while(a.every(el=>{
        let idx = b.indexOf(el);
        b.splice(idx,1);
        return idx >=0;
    })){
        xTimes++;
    }
    return xTimes;
    
    
}
