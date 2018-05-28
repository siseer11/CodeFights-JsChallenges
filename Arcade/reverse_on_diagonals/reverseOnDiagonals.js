function reverseOnDiagonals(matrix) {
    function swap(a,b,c,d){
        let temp = matrix[a][b];
        matrix[a][b] = matrix[c][d];
        matrix[c][d] = temp;
    }
    let len = matrix.length;
    for(var i = 0 ; i < len/2 ; i++){
        swap(i,i,len-i-1,len-i-1);
        swap(i,len-i-1,len-i-1,i);
    }
    return matrix;
}