const mysql = require('mysql');

var connection = mysql.createConnection({
  host: '172.17.0.3',
  // host: 'localhost',
  user: 'root',
  password: '',
  port: '3306',
  database: 'calendar',
  // timeout: 60000
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err + err.stack);
    return;
  }
  console.log('connected to DB');
});

module.exports = connection;
// docker test