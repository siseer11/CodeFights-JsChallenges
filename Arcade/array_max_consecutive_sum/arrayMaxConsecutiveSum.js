function arrayMaxConsecutiveSum(inputArray, k) {
    let max = inputArray.slice(0,k).reduce((a,b)=>a+b);
    let partial = max;
    for(var i = 0 ; i < inputArray.length-k; i++){
        partial = partial - inputArray[i] + inputArray[k+i];
        if(partial>max) max = partial        
    }
    return max;
}

/* FIRST SOLUTION

function arrayMaxConsecutiveSum(inputArray, k) {
    let max = inputArray.slice(0,k).reduce((a,b)=>a+b);
    let i = 1;
    let lastSum = max;
    while(i <= inputArray.length-k){
        
        let thisSum = lastSum + inputArray[i+k-1] - inputArray[i-1];
        if(max < thisSum) max = thisSum;
        lastSum = thisSum;
        i++;
        
    }
    return max;
}
*/