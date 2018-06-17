function alphabeticShift(inputString) {
	return inputString.split('')
    	   .map(el=>{
        		return String.fromCharCode((el.charCodeAt(0)==122)?97:el.charCodeAt(0)+1);
    		}).join('');
}
