var express = require("express");

var http = require("http");

var logger = require("morgan");

var mongoose = require("mongoose");

var mongoDB = 'mongodb+srv://jsaeou:xPoppy222@buwebdev-cluster-1-2eedp.mongodb.net/test'
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});





mongoose.promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function() {
    console.log('Application connected to mongoDB');
});

var app = express();

app.use(logger('dev'));

http.createServer(app).listen(8080, function() {
    console.log('Application started and listening on port 8080');
});