function countSumOfTwoRepresentations2(n, l, r) {
    let pos = 0;
    while(r >= n/2){
        if(n-r >= l){
          pos++; 
        }
        r--;
    }
    return pos;
}
