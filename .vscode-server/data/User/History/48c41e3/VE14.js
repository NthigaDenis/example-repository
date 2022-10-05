// Code your solutions in this file


var countdown = function (i) {
    console.log(i);
    i > 0 && countdown(i - 1);
}
countdown(10);