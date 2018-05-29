function deleteDigit(n) {
   let bigest = 0;
   n = String(n);
   for(var i = 0 ; i < n.length ; i++){
      let thisN = Number(n.slice(0,i) + n.slice(i+1));
      if(bigest<thisN)bigest = thisN;
   }
   return bigest;
}
