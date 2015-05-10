// You have a function rand5() that generates a random integer from 1 to 5. Use it to write a function rand7() that generates a random integer from 1 to 7.
// rand5() returns each integer with equal probability. rand7() must also return each integer with equal probability.

var rand5 = function () {
  return Math.floor(Math.random() * 5) + 1;
}

var rand7 = function () {
  var randomNum = 5 * (rand5() - 1) + rand5();
  return randomNum <= 21 ? (randomNum % 7) + 1 : rand7();
}

var resultsHash = {};

for (var i = 0; i < 70000; i++) {
  var randomNum = rand7();
  resultsHash[randomNum] = resultsHash[randomNum] + 1 || 1;
}

console.log(resultsHash);
