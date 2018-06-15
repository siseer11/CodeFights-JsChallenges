function sortByHeight(a) {
	let sorted = a.slice().filter(el=>el!=-1).sort((a,b)=>a-b);
    return a.map(el=>el==-1?el:sorted.shift());
}
