function chessBoardCellColor(cell1, cell2) {
   return cell1.split('').reduce((a,b)=>a.charCodeAt(0)+Number(b))%2 == cell2.split('').reduce((a,b)=>a.charCodeAt(0)+Number(b))%2;
}
