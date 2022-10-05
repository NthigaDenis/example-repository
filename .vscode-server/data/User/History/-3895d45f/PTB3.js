function print(callback) {
    const array = [8, 15, 30]
    callback(array);
};
function sumOfElements(myArray) {


    for (let elem of myArray) {
        let sum = 0
        sum = sum + elem

        console.log(elem)
    }
    return sum;
}
console.log(print(sumOfElements))
