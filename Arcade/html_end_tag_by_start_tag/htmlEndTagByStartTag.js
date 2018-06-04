function htmlEndTagByStartTag(startTag) {
    return startTag.match(/^<[a-z]+/i)[0].replace('<','</')+'>'
}