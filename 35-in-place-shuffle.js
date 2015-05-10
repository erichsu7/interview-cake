// Write a function for doing an in-place ↴ shuffle of an array.
// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.
//
// Assume that you have a function get_random(floor, ceiling) for getting a random integer that is >=floor and <=ceiling.

var inPlaceShuffle = function (array) {
  for (var i = 0; i < array.length; i++) {
    var randIdx = Math.floor(Math.random() * (array.length - i)) + i;
    var temp = array[i];
    array[i] = array[randIdx];
    array[randIdx] = temp;
  }

  return array;
}

var resultsHash = {};
for (var j = 0; j < 1000000; j++) {
  var result = inPlaceShuffle([1, 2, 3, 4]);
  resultsHash[result] = resultsHash[result] + 1 || 1;
}
console.log(resultsHash);
