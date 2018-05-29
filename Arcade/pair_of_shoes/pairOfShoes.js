function pairOfShoes(shoes) {
    if(shoes.length%2!=0)return false;
    let shoesCopy = shoes.slice('');
    let posible   = true;
    
    while(shoesCopy.length>1 && posible){
        let thisShoe = shoesCopy.shift();
        let isOne = shoesCopy.some((el,idx)=>{
            if(el[1]==thisShoe[1] && el[0]!=thisShoe[0]){
                shoesCopy.splice(idx,1);
                return true;
            }
            return false;
        })
        if(!isOne)posible=false;
    }
    return posible;
}