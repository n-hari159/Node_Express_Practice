var obj = {
    name: 'Hari Nakka',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
obj.greet.call({ name: 'Harry'});
obj.greet.apply({ name: 'Harry'});