function extractEachKth(inputArray, k) {
    return inputArray.reduce((acc,val,idx)=>{
        if((idx+1)%k!=0)acc.push(val);
        return acc;
    },[])
}
