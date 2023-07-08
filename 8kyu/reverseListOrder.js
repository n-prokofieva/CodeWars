function reverseList(list) {
    let result = []
    for (let i = 0; i < list.length; i++) {
        result.unshift(list[i])
    }
    return result
}