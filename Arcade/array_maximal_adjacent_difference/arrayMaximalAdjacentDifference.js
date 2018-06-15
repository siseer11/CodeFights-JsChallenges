function arrayMaximalAdjacentDifference(inputArray) {
	return inputArray.reduce((acc,val,idx)=>{
        if(idx == 0) return acc;
        if(Math.abs(val-inputArray[idx-1])>acc) acc = Math.abs(val-inputArray[idx-1]);
        return acc;
    },Math.abs(inputArray[1]-inputArray[0]))
}
