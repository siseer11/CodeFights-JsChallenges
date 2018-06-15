function arrayChange(inputArray) {
	return inputArray.reduce((acc,val,idx,arr)=>{
		if(idx > 0){
            let prev = arr[idx-1];
            if(prev >= val){
                acc+= prev-val+1;
				arr[idx] += prev-val+1;
            }
		}
		return acc;
	},0);
}
