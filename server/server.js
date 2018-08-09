
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/operations.js');
const faker = require('faker');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/../client/dist')));

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/listing/:listingid/overview', (req, res) => {
  const listingId = Number(req.params.listingid);
  console.log(listingId);
  const ratingsObj = {};

  const values = {};
  let accuracy =  Math.round(1 + Math.random() * 7) / 2;
  let communication = Math.round(1 + Math.random() * 7) / 2;;
  let cleanliness = Math.round(1 + Math.random() * 7) / 2;;
  let location = Math.round(1 + Math.random() * 7) / 2;;
  let checkIn = Math.round(1 + Math.random() * 7) / 2;;
  let value = Math.round(1 + Math.random() * 7) / 2;;
  values.accuracy = accuracy;
  values.communication = communication;
  values.cleanliness = cleanliness;
  values.location = location;
  values.checkIn = checkIn;
  values._value = value;
  values.avg = (values.accuracy + values.communication + values.cleanliness + values.location + values.checkIn + values._value) / 6;
  console.log(values);

  res.status(200).json(values);
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

app.post('/api/reviews/:listingid', (req, res) => {
  const listingId = Number(req.params.listingid);
  console.log(req.body);
  const reqData = req.body;
  var rightNow = faker.date.past().toISOString()  ; 
  reqData._date = rightNow.slice(0, 10) + ' ' + rightNow.slice(11, 19);
  db.postReview(listingId, reqData, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json(results);
  });
});

app.put('/api/reviews/:listingid', (req, res) => {
  db.updateReview(req.body, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json(results);
  })
});

app.delete('/api/listing/:listingid', (req, res) => {
  db.deleteListing(Number(req.params.listingid), (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json('Delete successfully');
  })
})

app.listen(3002, console.log('Listening on port 3002'));

module.exports = app;
