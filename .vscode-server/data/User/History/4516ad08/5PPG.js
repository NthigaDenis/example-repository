// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string) {
    let myDriver = [];
    drivers.filter(function (driver) {
        if (driver.toLowercase() === string.toLowercase()) {
            myDriver.push(driver);
        }
    })
    return myDriver;
}
