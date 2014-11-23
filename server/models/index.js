var db = require('../db');

//File retrieves and stores information that is on the database
var data;

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = "select messages.id, messages.text, messages.roomname, users.username \
                         from messages left outer join users on (messages.userid = users.id) \
                         order by messages.id desc";
      var queryArgs = [];

      db.dbConnect.query(queryString, queryArgs, function(err, results){
        if(err){throw err;}
        else {
          // console.log(results);
          callback(err, results);

        }
      });

    }, // a function which produces all the messages
    post: function (params, callback) {

      var queryString = 'insert into Messages (text, userid, roomname) VALUES (?, (select id from users where username = ? limit 1), ?)';
      db.dbConnect.query(queryString, params, function(err, results){
      if(err){throw err;}
      console.log('ive been posted');
      callback(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      var queryString = "SELECT * FROM Users";
      var queryArgs = [];
      db.dbConnect.query(queryString, queryArgs, function(err, results){
        if(err){throw err;}
        else {
          console.log(results);
          return results;
        }
      });
    },

    post: function (username) {
      db.dbConnect.query('insert into Users (`UserName`) VALUES (' + username + ')', function(err, result){
        if(err){throw err;}
        console.log('Message inserted');

      });
    }
  }
};

