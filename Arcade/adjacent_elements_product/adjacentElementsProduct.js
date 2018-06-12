function adjacentElementsProduct(inputArray) {
	return inputArray.reduce((acc,val,idx)=>{
		if(idx!==inputArray.length-1 && val*inputArray[idx+1]>acc){
            acc = val * inputArray[idx+1];
        }
        return acc;
    },inputArray[0]*inputArray[1])
}