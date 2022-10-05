// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amart', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwDrivers];
function createFareMultiplier(number) {
    return function (fare) {
        return (number(number) * number(fare))
    }
}
const fareDouble1 = createFareMultiplier(2);
function fareDouble(fare) {
    return fareDoubler1(fare)
}
const fareTripler = createFareMuliplier(3);
function fareTripler(fare) {
    return fareTripler1(fare)
}
