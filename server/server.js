const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const db = require('../db/index');
const model = require('../db/model');

// MIDDLEWARE
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/listing', (req, res) => {
  model.getListing((err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`)
})
