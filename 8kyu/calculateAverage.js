const findAverage = array => {
    let result = 0
    if (array.length === 0) {
        return result
    } else {
        for (let i = 0; i < array.length; i++) {
            result += array[i]
        }
        return result / array.length
    }
}