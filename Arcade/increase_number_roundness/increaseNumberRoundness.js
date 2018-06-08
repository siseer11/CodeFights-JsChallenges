function increaseNumberRoundness(n) {
    return n.toString().replace(/(0)\1*$/,'').indexOf('0') >= 0
}
