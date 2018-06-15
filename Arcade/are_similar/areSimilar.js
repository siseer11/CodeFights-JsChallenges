function areSimilar(a, b) {
    let posible = true;
    let xTimes = 0;
    for(i = 0 ; i < a.length ; i++){
        let [aEl,bEl] = [a[i],b[i]];
        if(aEl != bEl){
            //check the whole array for it
            let arrayCopy = a.slice();
            let found=false;
            while(arrayCopy.indexOf(bEl)>=0 && !found){
            	let idx = arrayCopy.indexOf(bEl);
                arrayCopy[idx] = 'x';
				if(b[idx] == aEl){
                    found = true;
                    b[idx] = 'x';
                    a[idx] = 'x';
                }
            }
            if(found){
                if(xTimes==1){
                 	posible = false;
                    break;
                }
               xTimes++;
            }else{
            	posible = false;
                break; 
            }
  			
           
        } 
    }
    return posible;
}
