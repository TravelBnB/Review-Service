let str = '';
for (var i = 0; i < 100; i++) {
  let randInt = Math.floor(1 + Math.random() * Math.random() * 9999999);
  str += `select users.name, users.photo, reviews._date, reviews.content FROM users INNER JOIN reviews ON reviews.listing_id = ${randInt} AND reviews.user_id = users.id ORDER BY reviews._date DESC;\n`;
}

console.log(str);