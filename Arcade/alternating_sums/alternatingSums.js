function alternatingSums(a) {
    return a.reduce((acc,val,idx)=>{
         idx%2==1?acc[0]+=val:acc[1]+=val;
         return acc;
     },[0,0])
 }
 