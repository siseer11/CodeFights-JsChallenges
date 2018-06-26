function growingPlant(upSpeed, downSpeed, desiredHeight) {
	let plantH = 0;
    let days = 0;
    while(plantH < desiredHeight){
        days++;
        if(plantH+upSpeed >= desiredHeight){
            plantH += upSpeed;
        }else{
            plantH += upSpeed-downSpeed;
        }  
    }
    return days;
}
