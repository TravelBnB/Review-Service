DROP DATABASE IF EXISTS review_db;

CREATE DATABASE review_db;

\c review_db;

CREATE TABLE users (
  id serial NOT NULL,
  name text,
  photo text,
  PRIMARY KEY (id)
);

CREATE TABLE listings (
  id serial NOT NULL,
  name text,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id serial,
  listing_id int,
  user_id int,
  accuracy DECIMAL(2,1),
  communication DECIMAL(2,1),
  cleanliness DECIMAL(2,1), 
  location DECIMAL(2,1),
  check_in DECIMAL(2,1),
  _value DECIMAL(2,1),
  _date text,
  content text
);

-- INSERT INTO users(id, name, photo) values (1, 'Lea', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/1.jpeg');
-- INSERT INTO listings(id, name) values (1, 'Huels Group');
-- INSERT INTO users(id, name, photo) values (2, 'Cecile', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/2.jpeg');
-- INSERT INTO listings(id, name) values (2, 'Bednar, Rath and Purdy');
-- INSERT INTO users(id, name, photo) values (3, 'Milo', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/3.jpeg');
-- INSERT INTO listings(id, name) values (3, 'Schimmel Group');
-- INSERT INTO users(id, name, photo) values (4, 'Christine', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/4.jpeg');
-- INSERT INTO listings(id, name) values (4, 'Bashirian Inc');
-- INSERT INTO users(id, name, photo) values (5, 'Harry', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/5.jpeg');
-- INSERT INTO listings(id, name) values (5, 'Corkery Group');
-- INSERT INTO users(id, name, photo) values (6, 'Camylle', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/6.jpeg');
-- INSERT INTO listings(id, name) values (6, 'Konopelski, Bogan and Waters');
-- INSERT INTO users(id, name, photo) values (7, 'Reyna', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/7.jpeg');
-- INSERT INTO listings(id, name) values (7, 'Wiza Group');
-- INSERT INTO users(id, name, photo) values (8, 'Jeremy', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/8.jpeg');
-- INSERT INTO listings(id, name) values (8, 'Pacocha - Larson');
-- INSERT INTO users(id, name, photo) values (9, 'Odie', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/9.jpeg');
-- INSERT INTO listings(id, name) values (9, 'Cartwright, Dickinson and Wolf');
-- INSERT INTO users(id, name, photo) values (10, 'Kianna', 'https://s3-us-west-2.amazonaws.com/jae-bae-static/dogs/doggo/10.jpeg');
-- INSERT INTO listings(id, name) values (10, 'MacGyver, Howell and Thompson');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999991, 1, 1.5, 1.5, 1, 1.5, 2, 2.5, '2008-4-26 10:38:31', 'Quia sit nihil aut quo. Maiores voluptas debitis veritatis ea magni cupiditate dolorum eaque odio.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999992, 2, 0, 3.5, 3, 0, 0, 3.5, '2012-9-9 11:60:11', 'Voluptatem atque error iure. Sapiente recusandae sed illum rerum. Dolor ipsam et est officia iste deleniti. Alias fugiat beatae repellat accusantium et. Itaque illum et perspiciatis voluptate velit. Alias repellendus nostrum vitae quibusdam.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999993, 5, 4, 3.5, 1.5, 0, 1, 2.5, '2002-4-8 12:21:47', 'Qui provident illo sit. Asperiores eum nihil laborum. Maxime eius facere. Molestiae temporibus nesciunt sit.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999994, 1, 2, 0, 0.5, 4, 0, 2, '2009-4-12 24:26:28', 'Ipsa magni temporibus qui provident sed et. Eius necessitatibus voluptatum qui velit natus ut corporis. Deleniti ea pariatur perferendis. Commodi deserunt quidem ut nam est mollitia ab.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999995, 3, 1, 1.5, 3.5, 4, 0.5, 2.5, '2000-2-14 16:13:53', 'Sunt consequatur mollitia nesciunt. Quaerat voluptas iusto quia earum doloremque porro. Ex totam ut et magni. Ad esse ut ipsa occaecati quia deleniti.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999996, 2, 1, 1.5, 0, 1.5, 3, 1.5, '2003-4-6 10:35:43', 'Et omnis qui tenetur praesentium ullam. Culpa quo qui qui aut enim. Voluptatibus omnis consequuntur. Pariatur consequatur nemo voluptatem sunt placeat tempora qui in. Delectus natus dolor ut culpa illum perspiciatis repudiandae dolores quis.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999997, 2, 0.5, 4, 2, 0, 3.5, 1, '2003-6-0 17:46:22', 'Sit iusto quis. Facere minima sunt. Consequatur et omnis. Magni optio fugit nobis commodi quibusdam hic consequatur quisquam est.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999998, 4, 3.5, 1, 3.5, 1, 3.5, 4, '2005-8-17 14:15:10', 'Non maxime est recusandae iusto aut repellat voluptatem. Maxime iure sunt amet et impedit quia sed. Rerum minus nihil voluptas ab et. Neque nesciunt sed vel est commodi rerum dicta. Excepturi consectetur veniam voluptatem laborum error sunt.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (9999999, 8, 3.5, 2, 2.5, 0, 1.5, 0, '2018-9-4 11:16:13', 'Cupiditate ut sint sint et voluptas voluptas modi. Minus et dolores asperiores non corrupti. Omnis inventore blanditiis vitae dolores. Eius omnis iusto debitis autem harum commodi repudiandae autem dolor. Asperiores excepturi hic. Nihil voluptatem quia deserunt excepturi officia et hic eligendi nulla.');
-- INSERT INTO reviews(listing_id, user_id, accuracy, communication, cleanliness, location, check_in, _value, _date, content) values (10000000, 1, 4, 3.5, 1.5, 1, 0, 2.5, '2016-3-2 19:49:54', 'Qui debitis necessitatibus earum nesciunt. Dolor officiis illo pariatur et voluptate soluta debitis. Voluptatem ipsa molestiae id repellendus rerum quam. Quam incidunt provident voluptatem soluta omnis vel tenetur autem voluptas. Eum blanditiis facere consequatur non quisquam ut quaerat rerum qui.');