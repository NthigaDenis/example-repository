// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string) {
    let myDriver = [];
    drivers.filter(function (driver) {
        if (driver.toLowercase === string.toLowercase) {
            myDriver.push(driver);
        }
    })
    return myDriver;
}
function fuzzyMatch(drivers, string) {
    let driverMatch = [];
    drivers.filter(function (drivers,) {
        for (i = 0; i < string.length; i++) {
            if (driver.charAt(i) === string.charAt(i) && driver.chart[i + 1]) {
                driverMatch.push(driver)
            }
        }
    })
    return driverMatch;
}
