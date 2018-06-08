function appleBoxes(k) {
    let y = 0;
    let r = 0;
    for(var i = 1 ; i <= k ; i++){
        if(i%2==0){
            y+=Math.pow(i,2);
        }else{
            r+=Math.pow(i,2);
        }
    }
    return y-r
}
