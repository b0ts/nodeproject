var express = require('express');
var goober = 'goober';
var app = express();
var port = process.env.PORT; // cloud9 global environment because they assign port
// var port = 5000; // for local environment listen to port 5000

var eventRouter = require('./src/routs/eventRouts');
var dbRouter = require('./src/routs/dbRouts');

app.use(express.static('bower_components')); // components updated by bower
app.use(express.static('public')); // search the public directory for routing first

app.use('/Events', eventRouter);
app.use('/Db', dbRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs'); // embedded javascript template engine

app.get('/', function(req, res) {
    //res.send('This text returned to standard get');
    // activates index.ejs passing in three params in json format
    res.render('index', {
        list: ['first val', 'second val', 'third val'],
        nav: [
            { Link: 'services', Text: 'Services' }, 
            { Link: 'portfolio', Text: 'Portfolio' }, 
            { Link: 'about', Text: 'About' },
            { Link: 'team', Text: 'Team' },
            { Link: 'contact', Text: 'Contact' },
            { Link: 'Events', Text: 'Events' }
            ]
    });
});


app.get('/routing', function(req, res) {
    res.send('This text returned to routing');
});

app.listen(port, function(err) { // express listening on the port - takes port number and a callback
    console.log('The server is running on port: ' + port);
});


console.log('goober: ' + goober);
console.log('jsonGoober: ' + JSON.stringify(goober));
