var person = {
    firstname : 'Hari',
    lastname : 'Nakka',
    greet : function() {
        console.log('hello'+ this.firstname)
    }
};

person.greet();