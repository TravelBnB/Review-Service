
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlpassword',
  database: 'review_db',
});

db.connect();

module.exports = db;
