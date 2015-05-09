// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome ↴ .
// Examples:
//
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

var hasPermutationPalindrome = function (string) {
  var charCounts = mapCharCounts(string);
  var numOfOddCharCounts = 0;
  for (var char in charCounts) {
    if (charCounts[char] % 2 !== 0) {
      numOfOddCharCounts++;
      if (numOfOddCharCounts > 1) {
        return false;
      }
    }
  }
  return true;
}

var mapCharCounts = function (string) {
  var charCounts = {};
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    charCounts[char] = charCounts[char] + 1 || 1;
  }

  return charCounts;
}

console.log(hasPermutationPalindrome("civic"));
console.log(hasPermutationPalindrome("ivicc"));
console.log(hasPermutationPalindrome("civil"));
console.log(hasPermutationPalindrome("livci"));
