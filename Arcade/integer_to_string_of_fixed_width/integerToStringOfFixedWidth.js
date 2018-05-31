function integerToStringOfFixedWidth(number, width) {
    number = number.toString();
    let len = number.length;
    return len >= width?number.slice(len-width):'0'.repeat(width-len) + number;
}
