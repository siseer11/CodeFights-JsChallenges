function differentSymbolsNaive(s) {
	let dif = [];
    s.split('').forEach(el=>{if(dif.indexOf(el)<0)dif.push(el)})
    return dif.length;
}