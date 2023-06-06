const reverseSeq = n => {
    let result = []
    for (let i = 0; i < n; i++) {
        result.unshift(i + 1)
    }
    return result;
}