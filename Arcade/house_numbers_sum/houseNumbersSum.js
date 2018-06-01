function houseNumbersSum(inputArray) {
    return inputArray.slice(0,inputArray.indexOf(0)).reduce((acc,val)=>acc+=val,0)
}
