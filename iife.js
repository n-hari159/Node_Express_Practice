// Immediately Invoked Function Expressions

var firstname = 'hari';

(function(lastname) {
    var firstname = 'nakka';
    console.log(firstname+lastname);
}('hari'));

console.log(firstname);