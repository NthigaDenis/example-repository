
let sum = 0
function print(callback) {
    const array = [8, 15, 30]
    callback(array);

};
function sumOfElements(myArray) {


    for (let elem = 0; elem < myArray.length; elem++) {

        sum = sum + myArray[elem]


    }
    return sum;
}
console.log(print(sumOfElements))
