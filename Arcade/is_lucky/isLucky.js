function isLucky(n) {
    n = String(n);
	let nLength = n.length/2;
    return n.slice(nLength).split('').reduce((acc,val)=>acc+=Number(val),0) == n.slice(0,nLength).split('').reduce((acc,val)=>acc+=Number(val),0);
}
