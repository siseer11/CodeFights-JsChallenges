function newNumeralSystem(number) {
    number = number.charCodeAt(0) - 65;
    let arr = [];
    for(var i = 0 ; i <= number/2 ; i++){
        arr.push(String.fromCharCode(i+65) +' + '+ String.fromCharCode(number-i+65))
    }
    return arr;
}