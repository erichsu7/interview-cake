// Imagine you landed a new job as a cashier...
// Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.
//
// Write a function that, given:
//
// an amount of money
// a list of coin denominations
// computes the number of ways to make amount of money with coins of the available denominations.
//
// Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:
//
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

var makeChange = function (value, denoms) {
  var changeCounts = { 0: 1};

  for (var i = 0; i < denoms.length; i++) {
    for (var j = denoms[i]; j <= value; j++) {
      var remainder = j - denoms[i];
      if (changeCounts[j]) {
        changeCounts[j] += changeCounts[remainder];
      } else {
        changeCounts[j] = changeCounts[remainder];
      }
    }
  }

  return changeCounts[value];
}

console.log(makeChange(5, [1, 3, 5]));
console.log(makeChange(4, [1, 2, 3]));
