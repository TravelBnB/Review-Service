
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/operations.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/listing/:listingid/overview', (req, res) => {
  const listingId = Number(req.params.listingid);
  console.log(listingId);
  const ratingsObj = {};

  db.getRatings(listingId, (err, results) => {
    if (err) {
      console.log('err in server - overview: ', err);
      return;
    }
    const values = {};
    let accuracy = 0;
    let communication = 0;
    let cleanliness = 0;
    let location = 0;
    let checkIn = 0;
    let _value = 0;
    results.map((row) => {
      accuracy += row.accuracy;
      communication += row.communication;
      cleanliness += row.cleanliness;
      location += row.location;
      checkIn += row.check_in;
      _value += row._value;
    });
    values.accuracy = Math.round(accuracy / results.length);
    values.communication = Math.round(communication / results.length);
    values.cleanliness = Math.round(cleanliness / results.length);
    values.location = Math.round(location / results.length);
    values.checkIn = Math.round(checkIn / results.length);
    values._value = Math.round(_value / results.length);
    values.avg = (values.accuracy + values.communication + values.cleanliness + values.location + values.checkIn + values._value) / 6;
    console.log(values);

    res.status(200).json(values);
  });
});

app.get('/api/listing/:listingid/reviews', (req, res) => {
  const listingId = Number(req.params.listingid);
  console.log(listingId);

  db.getReviews(listingId, function(err, results) {
    if (err) {
      console.log('err in server - reviews: ', err)
      return;
    }

    res.status(200).json(results);
  });
});

// app.post('/api/listing/:listingid/reviews', (req, res) => {
//   const listingId = Number(req.params.listingid);
  
// })

app.listen(3002, console.log('Listening on port 3002'));

module.exports = app;
