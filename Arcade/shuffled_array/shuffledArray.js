function shuffledArray(shuffled) {
    shuffled.sort((a,b)=>a-b);
    if(shuffled[0]>0){
        return shuffled.slice(0,-1);
    }
    let sum = shuffled.reduce((a,b)=>a+b);
    return shuffled.reduce((acc,val)=>{
        if(sum/2==val){
            sum = undefined;
        }else{
            acc.push(val);
        }
        return acc;
    },[])
}
