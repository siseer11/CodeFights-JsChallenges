function higherVersion(ver1, ver2) {
    [ver1,ver2]=[ver1.split('.'),ver2.split('.')];
    let posible = true;
    for(var i = 0 ; i < ver1.length ; i++){
        let [v1,v2] = [Number(ver1[i]),Number(ver2[i])];
        if(v1 > v2){
            break
        }else if(v1 < v2 ||(i==ver1.length-1 && v1==v2)){
            posible = false;
            break
        }
    }
    return posible;
}