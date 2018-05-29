function sudoku2(grid) {
    //check row
    let row = grid.every(el=>el.every((element,idx)=>element=='.'||el.lastIndexOf(element)==idx));
    if(!row) return false;
    //check col
    let col = true;
    for(var i = 0 ; i < grid.length ; i++){
        let prev =[];
        if(!col) break;
        for(var j = 0 ; j < grid.length ; j++){
            let thisEl = grid[j][i];
            if(thisEl != '.'){
                if(prev.indexOf(thisEl) >= 0){
                    col = false;
                    break
                }else{
                    prev.push(thisEl)
                }
            }
        }
    }
    if(!col) return false;
    //check square  
    let square = true;
    for(var i = 0; i < grid.length ; i+=3){
        if(!square)break;
        for(var j=0; j < grid.length ; j+=3){
			let s = [];
            s = s.concat(grid[j].slice(i,i+3),grid[j+1].slice(i,i+3),grid[j+2].slice(i,i+3));		
            if(!s.every((el,idx)=>el=='.'||s.lastIndexOf(el)==idx)){
                square = false;
                break;
            }
        }
    }
    return square;
}