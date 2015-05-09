// You're working on a secret team solving coded transmissions.
// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backwards! Your colleagues have handed off the last step to you.
//
// Write a function reverse_words() that takes a string message and reverses the order of the words in place ↴ .
//
// For example:
//
//   message = 'find you will pain only go you recordings security the into if'
//
// reverse_words(message)
// # returns: 'if into the security recordings you go only pain will you find'
// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.
//
// Strings are immutable ↴ in Python, so we can't use Python for in-place operations on a string. We'll use Ruby instead.
//
// If you're not comfortable coding in a language with mutable strings, you could split the string into a list of characters, do the in-place word reversal on that list, and re-join that list into a string before returning it. But keep in mind that this isn't technically "in-place," and the list of characters would cost O(n)O(n) additional space!

var reverseWords = function (string) {
  var reversedWords = reverseChars(string, 0, string.length - 1);
  var chars = reversedWords.split("");

  var wordStartIdx = 0;

  for (var i = 0; i <= string.length; i++) {
    if (chars[i] === " " || i === string.length) {
      reversedWords = reverseChars(reversedWords, wordStartIdx, i - 1);
      wordStartIdx = i + 1;
    }
  }

  return reversedWords;
}

var reverseChars = function (string, startIdx, endIdx) {
  var chars = string.split("");
  while (startIdx < endIdx) {
    var temp = chars[endIdx];
    chars[endIdx] = chars[startIdx];
    chars[startIdx] = temp;
    startIdx++;
    endIdx--;
  }

  return chars.join("");
}

console.log(reverseWords("find you will pain only go you recordings security the into if"));
