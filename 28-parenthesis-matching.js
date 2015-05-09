// I like parentheticals (a lot).
// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
//
// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
//
// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

var matchParenthesis = function (string, parenIdx) {
  if (string.charAt(parenIdx) !== "(") {
    throw "not a valid parenthesis index";
  }

  var openParenCount = 1;
  for (var i = parenIdx + 1; i < string.length; i++) {
    var char = string.charAt(i);
    if (char === "(") {
      openParenCount++;
    } else if (char === ")") {
      openParenCount--;
      if (openParenCount === 0) { return i; }
    }
  }

  return null;
}

console.log(matchParenthesis(
  "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.",
  10
))
