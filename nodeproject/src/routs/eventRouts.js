var express = require('express');
var eventRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

// var eventsData = [
//     {
//     name: 'Event 1',
//     description: 'The first event',
//     date: '2016.01.01',
//     time: '1:00 PM',
//     duration: '1 Hour',
//     location: {
//         streetAddr: '101 Main St.',
//         city: 'Los Angeles',
//         state: 'CA',
//         zip: '87885',
//         lon: 0,
//         lat: 0
//         },
//     capacity: 100
//     },
//     { 
//     name: 'Event 2',
//     description: 'The second event',
//     date: '2016.02.02',
//     time: '2:00 PM',
//     duration: '2 Hours',
//     location: {
//         streetAddr: '202 Main St.',
//         city: 'Los Angeles',
//         state: 'CA',
//         zip: '87885',
//         lon: 0,
//         lat: 0
//         },
//     capacity: 200
//     },
//     { 
//     name: 'Event 3',
//     description: 'The third event',
//     date: '2016.03.03',
//     time: '3:00 PM',
//     duration: '3 Hours',
//     location: {
//         streetAddr: '303 Main St.',
//         city: 'Los Angeles',
//         state: 'CA',
//         zip: '87885',
//         lon: 0,
//         lat: 0
//         },
//     capacity: 300
//     },
//     { 
//     name: 'Event 4',
//     description: 'The fourth event',
//     date: '2016.04.04',
//     time: '4:00 PM',
//     duration: '4 Hours',
//     location: {
//         streetAddr: '404 Main St.',
//         city: 'Los Angeles',
//         state: 'CA',
//         zip: '87885',
//         lon: 0,
//         lat: 0
//         },
//     capacity: 400
//     },
// ];

eventRouter.route('/')
    .get(function(req, res) {
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err,db) {
            var collection = db.collection('events');
            collection.find({}).toArray(function(err, results) {
                res.render('events', {
                    list: ['first event', 'second event', 'third event'],
                    nav: [
                    { Link: 'services', Text: 'Services' }, 
                    { Link: 'portfolio', Text: 'Portfolio' }, 
                    { Link: 'about', Text: 'About' },
                    { Link: 'team', Text: 'Team' },
                    { Link: 'contact', Text: 'Contact' },
                    { Link: 'Events', Text: 'Events' }
                    ],
                    events: results
                });
            });
        });
    });
    
eventRouter.route('/event')
  .get(function(req, res) {
        res.send('single event triggered');
     });
    
// this router expects link to end with an id number    
eventRouter.route('/:id')
   .get(function(req, res) {
        var id = req.params.id;
        
        var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err,db) {
            var collection = db.collection('events');
            collection.find({}).toArray(function(err, results) {
                res.render('event', {
                    list: ['first val', 'second val', 'third val'],
                    nav: [
                        { Link: 'services', Text: 'Services' }, 
                        { Link: 'portfolio', Text: 'P   ortfolio' }, 
                        { Link: 'about', Text: 'About' },
                        { Link: 'team', Text: 'Team' },
                        { Link: 'contact', Text: 'Contact' },
                        { Link: 'Events', Text: 'Events' }
                    ],
                    events: results[id],
                });
            });
        });
    });
    
module.exports = eventRouter;