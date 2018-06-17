function minesweeper(matrix) {
   return matrix.map((el,idx)=>{
        return el.map((element,index)=>{
            let sliced;
            if(index == 0){
                sliced = el.slice(0,2);
                sliced = sliced.concat((matrix[idx-1]?matrix[idx-1].slice(0,2):[]),(matrix[idx+1]?matrix[idx+1].slice(0,2):[]))
            }else if(index == el.length-1){
                sliced = el.slice(-2);
                sliced = sliced.concat((matrix[idx-1]?matrix[idx-1].slice(-2):[]),(matrix[idx+1]?matrix[idx+1].slice(-2):[]))
            }else{
                sliced = el.slice(index-1,index+2);
                sliced = sliced.concat((matrix[idx-1]?matrix[idx-1].slice(index-1,index+2):[]),(matrix[idx+1]?matrix[idx+1].slice(index-1,index+2):[]))
            }
            
            return sliced.reduce((a,b)=>a+b) - element;           
        })
    })
}