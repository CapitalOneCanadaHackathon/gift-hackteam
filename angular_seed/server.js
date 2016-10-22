var express = require('express');
var app     = express();
var db = require('./db');
var async = require('async');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});


app.get('/basictest', function(req, res) {
    
    db.connect(done);

    function done(){
        var pool = db.get();
        pool.query('SELECT * FROM testvas', function(err, results){
            res.status(200).json({"Name" : results[0].NAME });
        });
    }
});

app.post('/test', function(req, res){

    db.connect(done);
//{title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29), eventID:6, type:"board-meeting",location:"123 address st.",description:"this is a great meeting"}
    function done(){
        var pool = db.get();
        var events = [];
        pool.query('SELECT * FROM eventslog', function(err, results){
            events.push({"title": });
        });
    }
});


app.listen(8080);
console.log('Magic happens on 8080');
