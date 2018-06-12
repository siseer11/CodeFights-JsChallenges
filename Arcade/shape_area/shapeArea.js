function shapeArea(n) {
	let sum = 0;
    for(var i = 1 ; i < (n*2)-1; i+=2){
        sum += i;
    }
	return (sum*2)+(n*2)-1
}
