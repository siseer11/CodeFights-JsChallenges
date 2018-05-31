function timedReading(maxLength, text) {
    return text.replace(/[^a-z ]/gi , '').split(' ').filter(el=>el&&el.length <= maxLength).length
}
