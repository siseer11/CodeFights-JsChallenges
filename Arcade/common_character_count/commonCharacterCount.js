function commonCharacterCount(s1, s2) {
	let s1Arr = s1.split('');
    return s2.split('').reduce((acc,val)=>{
        let s1Idx = s1Arr.indexOf(val);
        if(s1Idx>=0){
            s1Arr.splice(s1Idx,1);
            acc++;
        }
        return acc;
    },0)
}
