function swapDiagonals(matrix) {
    function swap(a,b,c,d){
        let temp = matrix[a][b];
        matrix[a][b] = matrix[c][d];
        matrix[c][d] = temp;
    }
    let len = matrix.length;
    for(var i = 0 ; i < len/2 ; i++){
        swap(0+i,0+i,0+i,len-1-i);
        swap(len-1-i,0+i,len-1-i,len-1-i);
    }
    return matrix;
}