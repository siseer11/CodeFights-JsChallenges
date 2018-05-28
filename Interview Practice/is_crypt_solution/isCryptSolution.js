function isCryptSolution(crypt, solution) {
    crypt = crypt.join(' ');
    solution.forEach(el=>crypt = crypt.replace(new RegExp(el[0],'g'),()=>el[1]))
    crypt = crypt.split(' ');
    return crypt.every(el=>el=='0' || el[0]!='0') && Number(crypt[0])+Number(crypt[1])===Number(crypt[2])
}
