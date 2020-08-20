const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'calendar'
  // database: 'test2020'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to DB');
});

module.exports = connection;