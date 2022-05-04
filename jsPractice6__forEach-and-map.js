x = ["x", "y", 'z'];

x.forEach(function (num, index, array) {
  num += 1;
  console.log(num)
})

/////////////////////////////////////////////

var a = [1, 2, 3];

var b = a.map(function (num) {
  num += 1;
  return num;
});

console.log(b)