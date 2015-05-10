// Write a recursive function for generating all permutations of an input string. Return them as an array.
// Don't worry about duplicates—assume every character is unique.
//
// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.
//
// Your function can have loops—it just needs to also be recursive.

var stringPermutations = function (string) {
  if (string.length <= 1) { return [string] };

  var permutations = [];
  var lastChar = string.slice(-1);
  var prevPermutations = stringPermutations(string.slice(0, -1));
  prevPermutations.forEach(function (prevPermutation) {
    for (var i = 0; i <= prevPermutation.length; i++) {
      var nextPermutation =
        prevPermutation.slice(0, i) + lastChar + prevPermutation.slice(i);
      permutations.push(nextPermutation);
    }
  });

  return permutations;
}

console.log(stringPermutations("cat"));
