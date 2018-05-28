function crossingSum(matrix, a, b) {
    return matrix.reduce((acc,val,idx)=>acc+= (idx==a?val.reduce((a,b)=>a+b):val[b]),0)
 }
 