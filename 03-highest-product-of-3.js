// Given an array_of_ints, find the highest_product you can get from three of the integers.
// The input array_of_ints will always have at least three integers.

var findHighestProductOf3 = function (array) {
  var max = Math.max(array[0], array[1]);
  var min = Math.min(array[0], array[1]);
  var highestProductOf2 = array[0] * array[1];
  var lowestProductOf2 = array[0] * array[1];
  var highestProductOf3 = array[0] * array[1] * array[2];

  for (var i = 2; i < array.length; i++) {
    highestProductOf3 = Math.max(
      array[i] * highestProductOf2,
      array[i] * lowestProductOf2,
      highestProductOf3
    );
    highestProductOf2 = Math.max(
      array[i] * max,
      array[i] * min,
      highestProductOf2
    );
    lowestProductOf2 = Math.min(
      array[i] * min,
      array[i] * max,
      lowestProductOf2
    );
    max = Math.max(array[i], max);
    min = Math.min(array[i], min);
  }

  return highestProductOf3;
}

console.log(findHighestProductOf3([1, 10, -5, 1, -100]));
console.log(findHighestProductOf3([-10, -10, 1, 3, 2]));
