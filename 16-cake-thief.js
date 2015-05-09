// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.
//
// Each type of cake has a weight and a value, stored in tuples ↴ with two positions:
//
// An integer representing the weight of the cake in kilograms
// An integer representing the monetary value of the cake in British pounds
// For example:
//
//   # weighs 7 kilograms and has a value of 160 pounds
// (7, 160)
//
// # weighs 3 kilograms and has a value of 90 pounds
// (3, 90)
// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.
//
// Write a function max_duffel_bag_value() that takes an array of cake tuples and a weight capacity, and returns the maximum monetary value the duffel bag can hold.
//
// For example:
//
//   cake_tuples = [(7, 160), (3, 90), (2, 15)]
// capacity    = 20
//
// max_duffel_bag_value(cake_tuples, capacity)
// # returns 555 (6 of the middle type of cake and 1 of the last type of cake)
// Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.

var maxKnapsackValue = function (maxCapacity, weightValuePairs) {
  var maxKnapsackValues = [];
  for (var i = 0; i <= maxCapacity; i++) {
    maxKnapsackValues[i] = 0;
  }

  for (var j = 0; j <= maxCapacity; j++) {
    var currentMaxValue = 0;
    for (var k = 0; k < weightValuePairs.length; k++) {
      var weight = weightValuePairs[k][0];
      var value = weightValuePairs[k][1];
      if (weight <= j) {
        var remainderWeight = j - weight;
        var maxValueWithCake = value + maxKnapsackValues[remainderWeight];
        currentMaxValue = Math.max(maxValueWithCake, currentMaxValue);
      }
    }
    maxKnapsackValues[j] = currentMaxValue;
  }

  return maxKnapsackValues[maxCapacity];
}

console.log(maxKnapsackValue(20, [[7, 160], [3, 90], [2, 15]]));
