function drawRectangle(canvas, rectangle) {
    for(var i = rectangle[1]; i <= rectangle[3]; i++){
        if(i==rectangle[1] || i==rectangle[3]){
            canvas[i][rectangle[0]] = '*';
            canvas[i][rectangle[2]] = '*';
           for(var j = rectangle[0]+1; j < rectangle[2]; j++){
                canvas[i][j] = '-';
            }
        }else{
            canvas[i][rectangle[1]] = '|';
            canvas[i][rectangle[2]] = '|';
        }
    }
    return canvas;
}
