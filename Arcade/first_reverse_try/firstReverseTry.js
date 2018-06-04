function firstReverseTry(arr) {
    if(arr.length <= 1) return arr;
    let last = arr.pop();
    let first = arr.shift();
    arr.push(first);
    arr.unshift(last);
    return arr;
    
}