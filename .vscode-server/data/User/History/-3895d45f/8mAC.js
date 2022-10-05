let sum = 0
const sumOfElements = (myArray) => {


    for (let elem = 0; elem < myArray.length; elem++) {

        sum = sum + myArray[elem]


    }
    return sum;
}
function print(myFunction) {
    const array = [8, 15, 30]
    myFunction(array);

};

console.log(print(sumOfElements))
