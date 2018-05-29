function reflectString(inputString) {
    return inputString.split('').map(el=>String.fromCharCode(219-(el.charCodeAt(0)))).join('')
}
