function addBorder(picture) {
	let elLength = picture[0].length+2;
	return picture.slice().reduce((acc,val,idx)=>{
        acc.push(`*${val}*`);
        if(idx==picture.length-1){
            acc.push('*'.repeat(elLength));
        }
        return acc;
    },['*'.repeat(elLength)])
}
