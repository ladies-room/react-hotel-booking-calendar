const db = require('./index');

module.exports = {
  getListing: function (callback) {
    var queryStr = `SELECT * FROM Reservations`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}
