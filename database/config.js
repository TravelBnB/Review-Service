const { Pool } = require('pg');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'mysqlpassword',
//   database: 'review_db',
// });

// const dbString = "postgresql://localhost/review_db";
// const dbString = "postgresql://postgres@ec2-52-53-171-85.us-west-1.compute.amazonaws.com:5432/review_db";
const db = new Pool({
  host: 'ec2-52-53-171-85.us-west-1.compute.amazonaws.com',
  database: 'review_db',
  user: 'ansonbnb',
  password: 'thetravelers',
  port: 5432,
  max: 100,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000
});
// const db = new Pool({connectionString: dbString});

// let db = new pg.Client({
//   host: 'localhost',
//   database: 'review_db',
// });

// let db = new pg.Client(dbString);

db.connect();

module.exports = db;
