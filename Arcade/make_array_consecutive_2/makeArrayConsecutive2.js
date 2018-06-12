function makeArrayConsecutive2(statues) {
    return statues.sort((a,b)=>a-b)
        		  .reduce((acc,val,idx,thisarray)=>{
        				if(idx==statues.length-1) return acc;
						acc += thisarray[idx+1] - val -1;
        				return acc;
    				},0)
}
