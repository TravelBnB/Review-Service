const db = require('./config.js');

const getRatings = (listingId, whenRatings) => {
  const qs = `SELECT accuracy, communication, cleanliness, location, check_in, _value \
              FROM reviews WHERE listing_id = ${listingId}`;

  db.query(qs, whenRatings);
};

const getReviews = (listingId, whenReviews) => {
  const qs = `select users.name, users.photo, reviews._date, reviews.content \
              FROM users JOIN reviews \
              WHERE reviews.listing_id = ${listingId} AND users.id = reviews.user_id
              ORDER BY reviews._date DESC`;

  db.query(qs, whenReviews);
};

const postReview = (listingId, review, callback) => {
  const query = `INSERT INTO reviews (listing_id, user_id, _date, content) values (${listingId}, ${review.user_id}, '${review._date}', '${review.content}');`;
  db.query(query, callback);
};

module.exports = {
  getRatings, getReviews, postReview,
};
