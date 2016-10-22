var express = require('express');
var app     = express();
var db = require('./db');
var async = require('async');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/basictest', function(req, res) {
    
    function selectTest(){
        pool.query('SELECT * FROM testvas', function(err, results){
            console.log(results[0].NAME);
            res.send("Name: " + name);
        });
    }
    
    db.connect(done);

    function done(){
        var pool = db.get();
        pool.query('SELECT * FROM testvas', function(err, results){
            res.send("Name: " + results[0].NAME);
        });
    }
    
});


app.listen(8080);
console.log('Magic happens on 8080');
