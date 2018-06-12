function allLongestStrings(inputArray) {
	let longest = inputArray.sort((a,b)=>b.length-a.length)[0].length;
	return inputArray.slice().filter(el=>el.length==longest);
}
