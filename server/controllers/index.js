var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      var dbResult;
      models.messages.get(function(err, results){
        res.json(results);});


    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(results){
        res.sendStatus(201);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
    },

    post: function (req, res) {

    }
  }
};

