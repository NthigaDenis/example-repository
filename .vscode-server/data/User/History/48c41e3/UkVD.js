// Code your solutions in this file


var countDown() = function (i) {
    console.log(i);
    i > 0 && countDown(i - 1);
}
countdown(10);