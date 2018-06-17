function avoidObstacles(inputArray) {
	inputArray.sort((a,b)=>a-b);
    let jumpLen = 1;
    let finished = false;
    while(!finished){
       for(var i = 0 ; i < inputArray.length ; i++){
            jumpLen++;
            if(inputArray.every(el=>el%jumpLen!=0)){
             	finished = true;
                break;
            }
       }	
    }

	
	return jumpLen;
    
    
}