var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        res.json({results:results});
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.text, req.body.username, req.body.roomname];
      console.log('params of post request', params);
      models.messages.post(params, function(results){
        res.sendStatus(201);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results){
        res.json(results);
      });
    },

    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(results){
        res.sendStatus(201);
      });
    }
  }
};

