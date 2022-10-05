function print(callback) {
    const array = [8, 15, 30]
    callback(array);
};
function sumOfElements(myArray) {
    let sum = 0
    for (let elem of myArray) { sum += elem }
    return sum;
}
console.log(print(sumOfElements))