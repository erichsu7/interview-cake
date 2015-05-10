// I figured out how to get rich: online poker.
// I suspect the online poker game I'm playing shuffles cards by doing a single " riffle ↴
// A "riffle" is the standard way people shuffle cards by hand. You know, the thing that looks like this:
//
//
// Here's a rigorous definition of the riffle algorithm:
//
// cut the deck into halves half1 and half2
// grab a random number of cards from the top of half1 (could be 0, must be less than or equal to the number of cards left in half1) and throw them into the shuffled_deck
// grab a random number of cards from the top of half2 (could be 0, must be less than or equal to the number of cards left in half2) and throw them into the shuffled_deck
// repeat steps 2-3 until half1 and half2 are empty.
// ."
//
// To prove this, let's write a function to tell us if a full deck of cards shuffled_deck is a single riffle of two other halves half1 and half2.
//
// We'll represent a stack of cards as an array of integers in the range 1..521..52 (since there are 5252 distinct cards in a deck).
//
// Why do I care? A single riffle is not a completely random shuffle. If I'm right, I can make more informed bets and get rich and finally prove to my ex that I am not a "loser with an unhealthy cake obsession" (even though it's too late now because she let me go and she's never getting me back).
//

// Recursive implementation takes O(n^2) time and space
// var isSingleRiffle = function (deck, half1, half2) {
//   if (deck.length === 0) { return true; }
//
//   if (half1.length > 0 && half1[0] === deck[0]) {
//     return isSingleRiffle(deck.slice(1), half1.slice(1), half2);
//   } else if (half2.length > 0 && half2[0] === deck[0]) {
//     return isSingleRiffle(deck.slice(1), half1, half2.slice(1));
//   } else {
//     return false;
//   }
// }

// Iterative implementation uses pointers, runs in O(n) time and O(1) space
var isSingleRiffle = function (deck, half1, half2) {
  var i = 0, j = 0, k = 0;

  while (i < deck.length) {
    if (j < half1.length && deck[i] === half1[j]) {
      i++;
      j++;
    } else if (k < half2.length && deck[i] === half2[k]) {
      i++;
      k++;
    } else {
      return false;
    }
  }

  return true;
}


var deck = [1, 2, 6, 3, 4, 7, 8, 9, 5, 10];
var unriffledDeck = [9, 3, 1, 7, 4, 10, 2, 5, 8, 6]
var half1 = [1, 2, 3, 4, 5];
var half2 = [6, 7, 8, 9, 10];

console.log(isSingleRiffle(deck, half1, half2));
console.log(isSingleRiffle(unriffledDeck, half1, half2));
