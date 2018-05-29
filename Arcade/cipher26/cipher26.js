function cipher26(message) {
    let aSum = 0;
    return message.split('').map(el=>{
        let a = el.charCodeAt(0)-97;
        
        if(a>=aSum){
           a -= aSum; 
        }else{
           a = 26+a - aSum;     
        }
        aSum += a;
        aSum = aSum%26;
        return String.fromCharCode(a+97);
        
    }).join('')
}
