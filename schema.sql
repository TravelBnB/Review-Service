DROP DATABASE IF EXISTS review_db;

CREATE DATABASE review_db;

USE review_db;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name text, //
  photo text,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id int NOT NULL AUTO_INCREMENT,
  name text, //
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  listing_id int NOT NULL,
  user_id int NOT NULL,
  _date VARCHAR(20) NOT NULL,
  content text,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id) REFERENCES listings(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

