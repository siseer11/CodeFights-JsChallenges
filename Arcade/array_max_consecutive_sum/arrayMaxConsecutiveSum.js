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