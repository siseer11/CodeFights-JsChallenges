function amendTheSentence(s) {
    return s.replace(/[A-Z]/g,(el)=>` ${el.toLowerCase()}`).trim();
}
