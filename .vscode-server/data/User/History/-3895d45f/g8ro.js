
const receivesAFunction = spy => {
    return spy('recieves a function and calls it')
}
function returnsANamedFunction() {
    return function beforeall() { }
}
function returnsAnAnonymousFunction() { return function () { } }

