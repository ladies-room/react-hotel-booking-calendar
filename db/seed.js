const db = require('../db/index')
const moment = require('moment');
const faker = require('faker');

const generateListings = function (callback) {
  for (let i = 1; i <= 3; i++) {
    var nightly_fee = Math.floor(Math.random() * (1300, 800 + 1) + 800);
    var queryString = 'INSERT INTO listings (nightly_fee) VALUES (?)';
    let queryParams = [nightly_fee];

    // INSERT DATA TO DB;
    db.query(queryString, queryParams, (error, results) => {
      if (error) {
        console.log(`Failed to insert data to Listings`, error);
      } else {
        callback(i);
      }
    });
  }
}

// GENERATEE RESERVATION FOR EACH LISTINGS:
const generateReservations = function (listingID) {
  var dates = [];
  var totalBookings = Math.floor(Math.random() * (10 - 2) + 2);
  console.log(listingID, totalBookings);

  for (let i = 0; i < totalBookings; i++) {
    // generate a random booked date between a range;
    var randomDate = faker.date.between('2020-08-01', '2021-08-01');
    booked_date = moment(randomDate).format('YYYY-MM-DD');
    // console.log('booked_date 44 ', typeof booked_date, booked_date);
    dates.push(booked_date);
  }

  // Iterate over the dates array
  for (let i = 0; i < dates.length; i++) {
    var queryString = 'INSERT INTO Reservations (listing_id, booked_date) VALUES (?, ?)';
    var queryParams = [listingID, dates[i]];
    db.query(queryString, queryParams, (error, results) => {
      if (error) {
        console.log(`Failed to insert data to Reservations at listing_id = ${listing_id}`, error);
      } else {
        console.log('inserted to Reservations')
      }
    });
  }
}

// INVOKE FUNCTIONS:
generateListings(generateReservations);