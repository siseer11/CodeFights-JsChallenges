function boxBlur(image) {
  return image.reduce((acc,val,idx,arr)=>{
       if(idx==0 || idx==arr.length-1) return acc;
       //take the middle ones make the sum and push them into the acc;
       let subArray = [];
       for(var i = 1 ; i<val.length-1;i++){
           let topArr = arr[idx-1].slice(i-1,i+2);
           let subArr = arr[idx+1].slice(i-1,i+2);
           let sum = Math.floor(val.slice(i-1,i+2).concat(topArr,subArr).reduce((a,b)=>a+b)/9);
           subArray.push(sum);
       }
    	acc.push(subArray);
       return acc;
    },[])
}
