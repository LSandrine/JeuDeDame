var mysql = require('mysql');

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jeudedame',
  port : "3306"
});

module.exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
        if (err) {
            console.log(err);
            return;
        }
    });
};
