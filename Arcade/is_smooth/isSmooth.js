function isSmooth(arr) {
    let length = arr.length;
    let mid = length%2!=0?arr[Math.floor(length/2)]:arr[length/2]+arr[length/2-1];
    console.log(mid)
    return arr.pop() == mid &&  arr.shift() == mid;
}
