function rounders(value) {
    value = value.toString().split('');
    for(var i = value.length-1 ; i >= 1 ; i--){
        if(Number(value[i])>=5){
            value[i]='0';
            value[i-1] = Number(value[i-1])+1;
        }else{
            value[i]='0';
        }
    }
    return Number(value.join(''));
}
