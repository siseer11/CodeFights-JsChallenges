function matrixElementsSum(matrix) {
    return matrix.reduce((acc,val,idx,arr)=>{
            let actualArray = arr[idx];
            actualArray.forEach((el,idx)=>{
                acc+=(isNaN(el)?0:el);
                    if(el==0){
                        arr.forEach(element=>element[idx]='X');    
                    }
                })
    
            return acc;
            },0)
    }
    