function combs(comb1, comb2) {
    let min = comb1.length + comb2.length;
    comb1=comb1.split('');
    comb2 = comb2.split('');
    //slice the first one...
    for(var i = 1 ; i < comb1.length ; i++){
        let slice = comb1.slice(-i)
        let all = slice.every((el,idx)=>{
            return(el!=comb2[idx] || (el=='.'&&comb2[idx]=='.'))
        })
        
        let thisLength = comb2.length+comb1.length-i + slice.slice(comb2.length).length;
        
        if(all && min > thisLength){
            min = thisLength;
        }
    }
    for(var x = 1 ; x < comb2.length ; x++){
        let slice = comb2.slice(-x);
        let all = slice.every((el,idx)=>{
            return(el!=comb1[idx] || (el=='.'&&comb1[idx]=='.'))
        })
        
        let thisLength = comb1.length+comb2.length-x + slice.slice(comb1.length).length;
        
        if(all && min > thisLength){
            min = thisLength;
        }
    }
    return min
}
