// You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
// Let's say:
//
// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
//
// Examples:
//
// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false


var bracketValidator = function (string) {
  var bracketMap = {
    "(" : ")",
    "{" : "}",
    "[" : "]"
  };

  var openers = Object.keys(bracketMap);
  var closers = [];
  for (key in bracketMap) {
    closers.push(bracketMap[key]);
  }

  var openBrackets = [];
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (openers.indexOf(char) > -1) {
      openBrackets.push(char);
    } else if (closers.indexOf(char) > -1) {
      var lastOpenBracket = openBrackets[openBrackets.length - 1];
      if (bracketMap[lastOpenBracket] === char) {
        openBrackets.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(bracketValidator("{ [ ] ( ) }"));
console.log(bracketValidator("{ [ ( ] ) }"));
console.log(bracketValidator("{ [ }"));
