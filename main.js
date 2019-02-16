// Basic setup
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000 );

// home page 
app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Home Page');
});

// Doner page
app.get('/doner', function(req, res){
    res.type('text/page');
    res.send('This is the page for blood doners');    
});

// Recipient page
app.get('/recipient', function(req, res){
    res.type('text/plain');
    res.send('This is the recipient page');
});

// God page - just a shameless joke
app.get('/asdeth', function(req, res){
    res.type('text/plain');
    res.send('My god has arrived');
    res.send(' I bow before your granduer');
})

// Custom 404 page
app.use(function (req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

// Custom 500 page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// Bootstrapping the app
app.listen(app.get('port'), function() {
    console.clear();
    console.log('______')
    console.log('Server');
    console.log('______');
    console.log('');
    console.log('Bro I am listening on http://localhost:' + app.get('port'));
    console.log('You can kill me by pressing Ctrl + C');
});
