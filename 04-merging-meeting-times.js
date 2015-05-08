// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as a tuple of integers (start_time, end_time) . These integers represent the number of 30-minute blocks past 9:00am.
//
// For example:
//
//   (2, 3) # meeting from 10:00 – 10:30 am
// (6, 9) # meeting from 12:00 – 1:30 pm
// Write a function condense_meeting_times() that takes an array of meeting time ranges and returns an array of condensed ranges.
//
// For example, given:
//
//   [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
// your function would return:
//
//   [(0, 1), (3, 8), (9, 12)]
// Do not assume the meetings are in order. The meeting times are coming from multiple teams.
//
// In this case the possibilities for start_time and end_time are bounded by the number of 30-minute slots in a day. But soon you plan to refactor HiCal to store times as Unix timestamps (which are big numbers). Write something that's efficient even when we can't put a nice upper bound on the numbers representing our time ranges.

var sortNumber = function (a, b) {
  return a - b;
}

var mergeMeetingTimes = function (timePairs) {
  var result = [];
  var startTimes = [];
  var endTimes = [];
  timePairs.forEach(function (timePair) {
    startTimes.push(timePair[0]);
    endTimes.push(timePair[1]);
  })

  startTimes.sort(sortNumber);
  endTimes.sort(sortNumber);
  var prevStartTime = startTimes[0];
  var prevEndTime = endTimes[0];

  for (var i = 0; i < startTimes.length; i++) {
    var currentStartTime = startTimes[i];
    var currentEndTime = endTimes[i];
    if (currentStartTime <= prevEndTime) {
      prevEndTime = currentEndTime;
    } else {
      result.push([prevStartTime, prevEndTime]);
      prevStartTime = currentStartTime;
      prevEndTime = currentEndTime;
    }
  }

    // Try keeping two pointers
    // if (endTimes[j] < startTimes[j + 1] || !startTimes[j + 1]) {
    //   result.push([startTimes[i], endTimes[j]]);
    //   i++;
    //   j++;
    // } else if (startTimes[i + 1] > endTimes[i]) {
    //   i++;
    // } else {
    //   j++;
    // }

  result.push([prevStartTime, prevEndTime]);
  return result;
}

console.log(mergeMeetingTimes([[1, 2], [2, 3]]));
console.log(mergeMeetingTimes([[1, 5], [2, 3]]));
console.log(mergeMeetingTimes([[1, 10], [2, 6], [3, 5], [7, 9]]));
console.log(mergeMeetingTimes([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));
