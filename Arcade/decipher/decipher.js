function decipher(cipher) {
    return cipher.match(/1[0-9]{2}|9[7-9]{1}/g).map(el=>String.fromCharCode(el)).join('')
}
