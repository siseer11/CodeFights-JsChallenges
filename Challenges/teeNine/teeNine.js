function teeNine(m) {
    let a = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    a.forEach((el,i)=>{
        m = m.replace(new RegExp(el.split('').join('|'),'gi'),i+2);
    })
    return m.replace(/([0-9])\1*/g,(e)=>{
        let s = a[Number(e[0])-2];
        return s[(e.length-1)%s.length];
    });
}
