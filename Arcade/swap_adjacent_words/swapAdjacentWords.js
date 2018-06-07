function swapAdjacentWords(s) {
  return s.replace(/(\b[a-zA-Z]+) (\b[a-zA-Z]+)/g, (el,p1,p2)=>`${p2} ${p1}`);
}