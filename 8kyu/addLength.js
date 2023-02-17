function addLength(str) {
    let arr = str.split(" ");
    for (let i=0; i<arr.length; i++) {
        arr[i] = arr[i] + " " + arr[i].length;
    }
    return arr;
}
addLength('apple ban');

