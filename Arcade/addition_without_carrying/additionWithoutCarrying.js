function additionWithoutCarrying(param1, param2) {
    let[max,min]=[Math.max(param1,param2).toString(),Math.min(param1,param2).toString()];
    
    let front = max.slice(0,max.length-min.length);
    
    return Number(front + max.slice(max.length-min.length).split('').map((el,idx)=>{
        return (Number(el)+Number(min[idx]))%10
    }).join(''))
    
}
