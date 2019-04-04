var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

// Middleware
app.use('/assets', express.static(__dirname + '/public'));

// Template Engine
app.set('view engine', 'ejs');

// Creating own Middleware
app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});


app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'Hari', lastname: 'Nakka' });
});


app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>Person: '+ req.params.id +'</h1></body></html>');
});

app.listen(port);