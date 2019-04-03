// functions
function greet() {
    console.log('hi');
}

// first class functions
function logGreet(fn) {
    fn();
}
logGreet(greet);

// function expression
var greeting = function() {
    console.log('hi harry')
}
logGreet(greeting);


// use function expression on the fly
logGreet(function() {
    console.log("hello");
});