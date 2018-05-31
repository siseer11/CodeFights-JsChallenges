function alphabetSubsequence(s) {
    return s.split('').every((el,idx)=>{
       return idx==s.length-1?true:(el.charCodeAt(0) < s[idx+1].charCodeAt(0));
    })
}
