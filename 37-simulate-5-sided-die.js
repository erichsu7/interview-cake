// You have a function rand7() that generates a random integer from 1 to 7. Use it to write a function rand5() that generates a random integer from 1 to 5.
// rand7() returns each integer with equal probability. rand5() must also return each integer with equal probability.

var rand7 = function () {
  return Math.floor(Math.random() * 7) + 1;
}

var rand5 = function () {
  var randomNum = rand7();
  return randomNum <= 5 ? randomNum : rand5();
}

var resultsHash = {};

for (var i = 0; i < 50000; i++) {
  var randomNum = rand5();
  resultsHash[randomNum] = resultsHash[randomNum] + 1 || 1;
}

console.log(resultsHash);
