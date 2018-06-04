function replaceMiddle(arr) {
    let len = arr.length;
    if(len%2!=0)return arr;
    let mid = arr.splice(len/2,1)[0];
    arr[len/2-1]+= mid;
    return arr;
}
