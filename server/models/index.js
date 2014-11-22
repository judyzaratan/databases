var db = require('../db');

//File retrieves and stores information that is on the database


module.exports = {
  messages: {
    get: function () {
      var queryString = "SELECT * FROM Messages";
      var queryArgs = [];
      db.dbConnect.query(queryString, queryArgs, function(err, results){
        if(err){throw err;}
        else {
          console.log(results);
          return results;
        }
      });
    }, // a function which produces all the messages
    post: function (username, messageContent, date, chatRoom) {

      db.dbConnect.query('insert into Messages (`UserName`, `MessageContent`,`Date`, `ChatRoom`) VALUES (\"' +  username + '\", \"' + messageContent + '\", \"' + date + '\", \"' + chatRoom + '\")', function(err, result){
        if(err){throw err;}
        console.log('Message inserted');
        db.dbConnect.end();
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
        db.dbConnect.end();
      });
    }
  }
};

