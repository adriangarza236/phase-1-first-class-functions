function receivesAFunction(Spy) {
    Spy()

}
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("cool")
    }
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log("hi")
    }
}