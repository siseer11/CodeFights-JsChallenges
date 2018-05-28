function leastAppearance(c) {
    let z = {};
    return c.reduce((a,v)=>{
       let[f,s] = [v[0],v[1]]
       if((!z[s] && z[f]!=z[s])||(z[f]==z[s]&&s<f)||(z[f]>z[s])){
         a.push(s);
         z[s]?z[s]++:z[s]=1;
       }else{
         z[f]?z[f]++:z[f]=1;
         a.push(f);             
       }
        return a;
    },[])
}
