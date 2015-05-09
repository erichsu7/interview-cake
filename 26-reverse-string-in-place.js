// Write a function to reverse a string in place.
// "In place" means "without creating a new string in memory."
//
// Use a language where strings are mutable, like Ruby. In some languages, like Python, strings are immutable, meaning they cannot be changed after they're created.
//
// If you're not comfortable coding in a language with mutable strings, reverse an array of characters instead.

// Strings are immutable in JavaScript, so must convert string to array and reverse the array. Creating an array utilizes O(n) memory, but the reversal still takes only O(n) time.

var reverseString = function (string) {
  var chars = string.split("");
  for (var i = 0; i < (chars.length / 2); i++) {
    var temp = chars[i];
    chars[i] = chars[chars.length - 1 - i];
    chars[chars.length - 1 - i] = temp;
  }

  return chars.join("");
}

console.log(reverseString("dog"));
console.log(reverseString("tree"));
console.log(reverseString("racecar"));
