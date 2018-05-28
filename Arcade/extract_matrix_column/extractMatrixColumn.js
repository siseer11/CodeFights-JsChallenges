function extractMatrixColumn(matrix, column) {
    return matrix.reduce((acc,val)=>{acc.push(val[column]);return acc},[])
}
