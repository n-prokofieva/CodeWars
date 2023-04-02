const contamination = (text, char) => {
    if (text.length > 0 && char.length > 0) {
        return char.repeat(text.length)
    } else {
        return ''
    }
}