// I have an array where every number in the range 1...n1...n appears once except for one number which appears twice.
// Write a function for finding the number that appears twice.

var appearsTwice = function (array) {
  // Find max of array in O(n) time
  var max = Math.max.apply(Math, array);
  // Sum of 1..n is (n^2 + n) / 2
  var optimalSum = (Math.pow(max, 2) + max) / 2;
  // Find sum of array in O(n) time
  var sum = array.reduce(function(a, b) {
    return a + b;
  })

  return sum - optimalSum;
}

console.log(appearsTwice([2, 7, 3, 5, 9, 1, 4, 8, 6, 3]));
