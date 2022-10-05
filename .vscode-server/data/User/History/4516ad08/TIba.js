// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string) {
    let myDriver = [];
    drivers.filter(function (driver) {
        if (driver.toLowerCase() === string.toLowerCase()) {
            myDriver.push(driver);
        }
    })
    return myDriver;
}


function fuzzyMatch(drivers, string) {
    let driverMatch = [];
    drivers.filter(function (driver) {
        for (let i = 0; i < string.length; i++) {
            if (driver.charAt(i) === string.charAt(i) && driver.charAt[i + 1] === string.charAt(i + 1)) {
                driverMatch.push(driver);
            }
        }
    })
    return driverMatch;
}
function matchName(drivers, string) {
    let newDriver = [];
    drivers.filter(function (driver) {
        if (driver.name === string) {
            newDriver.push(driver);

        }
    })
    return newDriver;
}
