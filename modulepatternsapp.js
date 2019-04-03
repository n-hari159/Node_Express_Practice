var greet = require('./modulepatterns/greet1');
greet();

var greet2 = require('./modulepatterns/greet2').greet;
greet2();
// can also be written as
var greet3 = require('./modulepatterns/greet2');
greet3.greet();

var greet4 = require('./modulepatterns/greet3');
greet4.greet();
greet4.greeting = 'changed Hello World';

var greet4b = require('./modulepatterns/greet3');
greet4b.greet();

var Greet5 = require('./modulepatterns/greet4');
var grtr = new Greet5();
grtr.greet();

var greet6 = require('./modulepatterns/greet5').greet;
greet6();