// I want to learn some big words so that people think I'm smart.
// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I decided to start placing them at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I had started at.
//
// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated."
//
// Write a function for finding the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

var rotationPoint = function (array) {

  var low = 0;
  var high = array.length - 1;

  while (low < high) {
    var firstWord = array[low];
    var mid = Math.floor((low + high) / 2);
    if (array[mid] > firstWord) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return high + 1;
};

console.log(rotationPoint(["c","d", "e", "f", "g", "a", "b"]));
