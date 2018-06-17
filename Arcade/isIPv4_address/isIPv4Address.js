function isIPv4Address(inputString) {
    if(inputString.split('.').length == 4){
       return inputString.split('.').every(el=>{
        if(el=='') return false;
        return Number(el) >= 0 && Number(el)<256;
    })}else{
           return false;
       }
}
