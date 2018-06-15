function palindromeRearranging(inputString) {
	let chars = {};
    inputString.split('').forEach(el=>{
        chars[el]?chars[el]++:chars[el]=1;
    });
    var ones = 0;
    for(var key in chars){
        if(chars[key]%2==1)ones++;
    }
    return ones < 2;
}
