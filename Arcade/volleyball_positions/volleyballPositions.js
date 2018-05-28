function volleyballPositions(formation, k) {
    let i = 0
    while(i < k%6){
        [formation[0][1],formation[1][2],formation[3][2],formation[2][1],formation[3][0],formation[1][0]] = 
        [formation[1][2],formation[3][2],formation[2][1],formation[3][0],formation[1][0],formation[0][1]]
        i++;
    }
    return formation;
}
