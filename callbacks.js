function greet(callback) {
    console.log('Hello');
    var data = {
        name: 'Hari Nakka'
    };
    
    callback(data);
}

greet(function(data) {
    console.log('callback invoked');
    console.log(data);
});

greet(function(data) {
    console.log('Different callback invoked');
    console.log(data.name);
});