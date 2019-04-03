// Our Own Emitter
// var Emitter = require('./emitter');

// var emtr = new Emitter();

// emtr.on('greet', function() {
//     console.log('somewhere, someone said hello');
// });

// emtr.on('greet', function() {
//     console.log('A greeting occured');
// });

// console.log("Hello");
// emtr.emit('greet');


// using Internal Node Emitter
var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('somewhere, someone said hello');
});

emtr.on('greet', function() {
    console.log('A greeting occured');
});

console.log("Hello");
emtr.emit('greet');