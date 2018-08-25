const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/operations.js');
const compression = require('compression');
const redis = require('redis');
const cors = require('cors');
const numCPUs = require('os').cpus().length;
const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(REDIS_URL);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist'), {
  etag:false,
  maxage: '2h'
}));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});
// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/listing/:listingid/overview', (req, res) => {
  const listingId = Number(req.params.listingid);
  const listingCount = `listings_${listingId}`;
  const listingInfo = `overviews_${listingId}`;
  client.incr(listingCount, (err, count) => {
    client.hgetall(listingInfo, (err2, overview) => {
      if (overview) {
        res.status(200).json(overview);
      } else {
        db.getRatings(listingId, (err3, results) => {
          if (err3) {
            console.log('err in server - overview: ', err);
            res.status(404).json(err);
          } else {
            let values = {};
            values.accuracy = 0;
            values.communication = 0;
            values.cleanliness = 0;
            values.location = 0;
            values.check_in = 0;
            values._value = 0;
            for (var i = 0; i < results.rows.length; i++) {
              values.accuracy += parseFloat(results.rows[i].accuracy);
              values.communication += parseFloat(results.rows[i].communication);
              values.cleanliness += parseFloat(results.rows[i].cleanliness);
              values.location += parseFloat(results.rows[i].location);
              values.check_in += parseFloat(results.rows[i].check_in);
              values._value += parseFloat(results.rows[i]._value);
            }
            console.log(Math.round((values.communication / results.rows.length) * 2) / 2);
            values.accuracy = Math.round((values.accuracy / results.rows.length) * 2) / 2;
            values.communication = Math.round((values.communication / results.rows.length) * 2) / 2;
            values.cleanliness = Math.round((values.cleanliness / results.rows.length) * 2) / 2;
            values.location = Math.round((values.location / results.rows.length) * 2) / 2;
            values.check_in = Math.round((values.check_in / results.rows.length) * 2) / 2;
            values._value = Math.round((values._value / results.rows.length) * 2) / 2;
            values.avg = Math.round((values.accuracy + values.communication + values.cleanliness + values.location + values.check_in + values._value) / 6);
            console.log(values);

            client.hmset(listingInfo, values, (errhm, resulthm) => {
              if (errhm) console.log(errhm);
              client.expire(listingInfo, 86400);
            });
            res.status(200).json(values);
          }
        });
      }
    });
  });
});

app.get('/api/listing/:listingid/reviews', (req, res) => {
  const listingId = Number(req.params.listingid);
  const listingCount = `listingCount:${listingId}`;
  const listingReviews = `reviews:${listingId}`;
  client.incr(listingCount, (err, count) => {
    client.hgetall(listingReviews, (err2, reviews) => {
      if (reviews) {
        res.status(200).json(reviews);
      } else {
        db.getReviews(listingId, function(err3, results) {
          if (err3) {
            console.log('err3 in server - reviews: ', err3);
            res.status(404).json(err3);
          }
          client.rpush(listingId, results.rows, (err4, reply) => {
            console.log(reply);
            client.expire(listingId, 86400);
          })
          res.status(200).json(results.rows);
        });
      }
    });
  });
});


app.get('/api/listings/latest', (req, res) => {

  db.getLatestListings((err, results) => {
    if (err) {
      console.log(err);
      res.status(404).json('Not found');
    } else {
      res.status(200).json(results.rows);
    }
  });
});

app.post('/api/reviews/:listingid', (req, res) => {
  const listingId = Number(req.params.listingid);
  // console.log(req.body);
  const reqData = req.body;
  var rightNow = faker.date.past().toISOString(); 
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
  });
});

app.delete('/api/listing/:listingid', (req, res) => {
  db.deleteListing(Number(req.params.listingid), (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json('Delete successfully');
  });
});

// app.listen(3002, console.log('Listening on port 3002'));

module.exports = app;
