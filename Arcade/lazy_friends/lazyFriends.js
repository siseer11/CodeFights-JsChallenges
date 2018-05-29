function lazyFriends(houses, maxDist) {
    return houses.map((el,idx)=>{
        return houses.reduce((acc,val,index)=>{
            if(idx == index)return acc;
            if(Math.abs(val-el) <= maxDist)acc+= 1;
            return acc;
        },0)
    })
}