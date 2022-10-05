function print(callback) {
    const array = [8, 15, 30]
    callback(array);
};
function sumOfElements(myArray) {


    for (let elem of myArray) {

        console.log(elem)
    }

}
console.log(print(sumOfElements))
