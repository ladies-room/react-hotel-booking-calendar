const mysql = require('mysql');

var connection = mysql.createConnection({
  // host: '172.17.0.2',
  host: 'localhost',
  user: 'root',
  // port: '2046',
  database: 'calendar',
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected to DB');
});

module.exports = connection;

// docker test