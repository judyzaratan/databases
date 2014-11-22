var express = require('express');
var db = require('./db');
var path = require('path');

var model = require('./models');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

var clientPath = path.resolve(__dirname, "../client");
console.log(clientPath);
// Serve the client files
app.use(express.static(clientPath));
console.log(clientPath + "/index.html");
app.get('/', function(req, res){
  res.redirect('/index.html');
});



// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}

// model.messages.post('avi', "whatsup", '2014-10-31', 'hell');
// console.log(model.messages.get());
