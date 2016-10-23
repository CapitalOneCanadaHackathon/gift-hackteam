var express = require('express');
var app     = express();
var db = require('./db');
var async = require('async');
var bodyparser = require('body-parser');

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendfile('index.html');
});


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.post('/api/postTest', function(req,res){
    console.log(req.body);
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

app.get('/api/getEvents', function(req, res){

    db.connect(done);

    function done(){
        var pool = db.get();
        var events = [];
        
        pool.query('SELECT * FROM eventslog', function(err, results){
            
            var arraylength = results.length;
            console.log(arraylength);
            for(var i = 0; i < arraylength; i++){
                events.push({"title":results[i].eventTitle, "start":results[i].eventStart, "end":results[i].eventEnd, "eventId":results[i].eventId, "type":results[i].eventType, "location":results[i].eventAddress, "description":results[i].eventDescription, "createdBy":results[i].userId, "numVolunNeeded":results[i].numVolunNeeded, "numAttendees":results[i].numAttendees});
            }
            res.status(200).json(events); 
        });
    }
});

//INSERTS INTO ALL TABLES



app.listen(8080);
console.log('Magic happens on 8080');
