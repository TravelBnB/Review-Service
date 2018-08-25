var arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(Math.floor(9000001 + ((Math.random() * Math.random()) * 999999)));
}

arr.sort((a,b) => {
  return a-b;
});

var avg = arr.reduce((accu, ele) => {
  return accu + ele;
});

console.log(avg / arr.length);

console.log(arr.join(','));