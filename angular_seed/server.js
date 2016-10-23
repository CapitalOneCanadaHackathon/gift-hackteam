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
    console.log("hell");
    db.connect(done);

    function done(){
        var pool = db.get();
        pool.query('SELECT * FROM faverdb', function(err, results){
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
            
            for(var i = 0; i < arraylength; i++){
                events.push({"title":results[i].eventTitle, "start":results[i].eventStart, "end":results[i].eventEnd, "eventId":results[i].eventId, "type":results[i].eventType, "location":results[i].eventAddress, "description":results[i].eventDescription, "createdBy":results[i].userId, "numVolunNeeded":results[i].numVolunNeeded, "numAttendees":results[i].numAttendees});
            }

            res.status(200).json(events); 
        });
    }
});

app.post('/api/getAttendees', function(req, res){

    var eventId = req.body.eventId;
    //console.log(req.body);
    db.connect(done);

    function done(){
        var pool = db.get();
        var events = [];
        pool.query('SELECT * FROM useraccount INNER JOIN eventattendance ON useraccount.userId = eventattendance.userId WHERE eventId = ?',[eventId], function(err, results){
            
            var arraylength = results.length;
            console.log(arraylength);
            for(var i = 0; i < arraylength; i++){
                events.push({"firstName":results[i].firstName, "lastName":results[i].lastName, "userId":results[i].userId});
            }
            
            res.status(200).json(events); 
        });
    }
});

app.post('/api/attendEvent', function(req, res){

    var eventId = req.body.eventId;
    var userId = req.body.userId;
    //console.log(req.body);
    db.connect(done);

    function done(){
        var pool = db.get();
        var events = [];
        pool.query('INSERT INTO eventattendance(eventId, userId, willAttend) VALUES (?,?,1)',[eventId, userId], function(err, results){         
            res.status(200).json(events);
            var pool2 = db.get();
            pool2.query('SELECT * FROM eventslog WHERE eventId = ?',[eventId], function(err, results){  
                var count = results[0].numAttendees;
                count++;
                var pool3 = db.get();
                pool3.query('UPDATE eventslog SET numAttendees = ? WHERE eventId = ?', [count, eventId], function(err, results){
                
                });
            });
        });
    }
    //TODO:not udating the numAtendees number in eventslogs
});


app.post('/api/leaveEvent', function(req, res){

    var eventId = req.body.eventId;
    var userId = req.body.userId;
    //console.log(req.body);
    db.connect(done);

    function done(){
        var pool = db.get();
        var events = [];
        pool.query('DELETE FROM eventattendance WHERE eventId = ? AND userId = ?',[eventId, userId], function(err, results){         
            res.status(200).json(events);
            var pool2 = db.get();
            pool2.query('SELECT * FROM eventslog WHERE eventId = ?',[eventId], function(err, results){  
                var count = results[0].numAttendees;
                count--;
                var pool3 = db.get();
                pool3.query('UPDATE eventslog SET numAttendees = ? WHERE eventId = ?', [count, eventId], function(err, results){
                
                });
            }); 
        });
    }
    //TODO:not udating the numAtendees number in eventslogs
});

app.post('/api/visitedEventPage', function(req, res){

    var eventId = req.body.eventId;
    //console.log(req.body);
    db.connect(done);

    function done(){
        var pool = db.get();
        var events = [];
        pool.query('SELECT * FROM eventslog WHERE eventId = ?',[eventId], function(err, results){         
            var count = results[0].eventViews;
            count++;
            var pool2 = db.get();
            pool2.query('UPDATE eventslog SET eventViews = ? WHERE eventId = ?', [count, eventId], function(err, results){

            });
        });
    }
});


app.post('/api/getAdminInfo', function(req, res){

    var key = req.body.key;
    //console.log(req.body);
    db.connect(done);

    function done(){
        var pool = db.get();
        var events = [];
        pool.query('SELECT * FROM adminkey', function(err, results){         
            var pool2 = db.get();
            events.push({"key":results[0].genDate, "date":results[0].accountCreationKey});
        });
        res.status(200).json(events); 
    }
});

app.post('/api/updateKey', function(req, res){

    var key = req.body.key;
    //console.log(req.body);
    db.connect(done);

    function done(){
        var pool = db.get();
        var events = [];
        var presentDate = new Date();
        pool.query('DELETE FROM adminkey', function(err, results){         
            var pool2 = db.get();
            pool2.query('INSERT INTO adminkey(genDate, accountCreationKey) VALUES(?,?)', [presentDate, key], function(err, results){

            });
        });
    }
});

//INSERTS INTO ALL TABLES



app.listen(8080);
console.log('Magic happens on 8080');
