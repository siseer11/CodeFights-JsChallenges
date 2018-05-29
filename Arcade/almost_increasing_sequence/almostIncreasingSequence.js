function increasing(arr){
    return arr.every((el,idx)=>idx==0?true:el>arr[idx-1])
}
function almostIncreasingSequence(sequence) {
    for(var i = 0 ; i < sequence.length ; i++){
        if(sequence[i]>=sequence[i+1]){
            if(increasing(sequence.slice(0,i).concat(sequence.slice(i+1))) || increasing(sequence.slice(0,i+1).concat(sequence.slice(i+2)))){
                return true;
                break;
            }else{
                return false;
                break;
            }
        }
    }
    return true;
}