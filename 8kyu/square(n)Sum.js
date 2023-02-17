function squareSum(numbers){
    return numbers.reduce((acc, el) => {
        return acc + el*el;
    }, 0);
}
squareSum([1, 2, 2]);

// function squareSum(numbers){
//     return numbers.reduce((sum,num) => sum + (num * num), 0);
// }
