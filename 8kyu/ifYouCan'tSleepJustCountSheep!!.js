const countSheep = num => {
    let str = ''
    for (i = 0; i < num;  i++) {
        str += (i + 1) + ' sheep...'
    }
    return str
}