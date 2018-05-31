function switchLights(a) {
    return a.reduce((acc,val,idx)=>{
        //push the el
        acc.push(val)
        //if the el is 1 map the acc else just push el
        if(val==1)acc = acc.map(el=>el==0?1:0)
        return acc;
    },[])
}
