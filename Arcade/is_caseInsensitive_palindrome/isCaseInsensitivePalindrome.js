function isCaseInsensitivePalindrome(inputString) {
    inputString = inputString.toLowerCase()
    return inputString.split('').reverse().join('') === inputString;
}  
