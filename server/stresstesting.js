import $ from 'jquery';

for (var i = 0; i < 100; i++) {
  let randInt = Math.floor(1 + (1 - Math.random() * Math.random()) * 9999999);
  $.ajax({
    method: "GET",
    url: `http://localhost:3002/api/listing/${randInt}/overview`
  })
}