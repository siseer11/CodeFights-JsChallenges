function stolenLunch(note) {
    let alph = {0:'a',1:'b',2:'c',3:'d',4:'e',5:'f',6:'g',7:'h',8:'i',9:'j','a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9}
    return note.split(' ').map(el=>{
        return el.split('').map(element=>alph.hasOwnProperty(element)?alph[element]:element).join('')
        return el;
    }).join(' ')
}
