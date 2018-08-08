const db = require('./config.js');

const getRatings = (listingId, whenRatings) => {
  const qs = `SELECT accuracy, communication, cleanliness, location, check_in, _value \
              FROM reviews WHERE listing_id = ${listingId}`;

  db.query(qs, whenRatings);
};

const getReviews = (listingId, whenReviews) => {
  const qs = `select users.name, users.photo, reviews._date, reviews.content, reviews.is_reported \
              FROM users JOIN reviews \
              WHERE reviews.listing_id = ${listingId} AND users.id = reviews.user_id
              ORDER BY reviews._date DESC`;

  db.query(qs, whenReviews);
};

module.exports = {
  getRatings, getReviews,
};
