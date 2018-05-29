function arrayConversion(inputArray) {
    let i = 0;
    while(inputArray.length>1){
        inputArray = inputArray.reduce((acc,val,idx)=>{
           if(idx%2==0){
               if(i%2==0){
                 acc.push(val+inputArray[idx+1])
               }else{
                 acc.push(val*inputArray[idx+1])  
               }
           } 
            return acc;
        },[])
        i++;
    }
    return inputArray[0];
}   