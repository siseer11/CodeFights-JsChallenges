function couldBeAnagram(s1, s2) {
    return s1.length==s2.length&&s1.split('').every(e=>{
        if(e=='?'||s2.indexOf(e)>=0){
           s2 = s2.replace(e,'')
           return 1;
        }
        return 0;
    })
}
