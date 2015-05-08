// A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.
// They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.
//
// It must
// be love
// Write a function to find the rectangular intersection of two given love rectangles.
//
// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.
//
// They are defined as hash maps ↴ like this:
//
//   my_rectangle = {
//
//     # coordinates of bottom-left corner:
//     'x': 1,
//     'y': 5,
//
//     # width and height
//     'width': 10,
//     'height': 4,
//
//     }
// Your output rectangle should use this format as well.

var findIntersection = function (rect1, rect2) {
  var maxStartX = Math.max(rect1.x, rect2.x);
  var maxStartY = Math.max(rect1.y, rect2.y);
  var minEndX = Math.min(rect1.x + rect1.width, rect2.x + rect2.width);
  var minEndY = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);

  if (maxStartX < minEndX && maxStartY < minEndY) {
    return {
      "x": maxStartX,
      "y": maxStartY,
      "width": minEndX - maxStartX,
      "height": minEndY - maxStartY
    };
  } else {
    return null;
  }
}

var rect1 = {
  "x": 0,
  "y": 0,
  "width": 6,
  "height": 4
}

var rect2 = {
  "x": 3,
  "y": 2,
  "width": 1,
  "height": 1
}

console.log(findIntersection(rect1, rect2));
