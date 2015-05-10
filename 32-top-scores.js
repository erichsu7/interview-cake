// You created a game that is more popular than Angry Birds.
// You rank players in the game from highest to lowest score. So far you're using an algorithm that sorts in O(n\lg{n})O(nlgn) time, but players are complaining that their rankings aren't updated fast enough. You need a faster sorting algorithm.
//
// Write a function that takes:
//
// a list of unsorted_scores
// the highest_possible_score in the game
// and returns a sorted list of scores in less than O(n\lg{n})O(nlgn) time.

var sortScores = function (array) {
  var scoreCounts = [];

  array.forEach(function (score) {
    scoreCounts[score] = scoreCounts[score] + 1 || 1;
  })

  var result = [];
  for (var score = 0; score < scoreCounts.length; score++) {
    for (var i = 0; i < scoreCounts[score]; i++) {
      result.push(score);
    }
  }
  
  return result;
}

console.log(sortScores([900, 332, 632, 472, 783, 123, 358, 783, 126, 632, 835, 292]));
