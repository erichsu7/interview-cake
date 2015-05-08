// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.
//
// For example, given:
//
//   [1, 7, 3, 4]
// your function would return:
//
//   [84, 12, 28, 21]
// by calculating:
//
//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]
// Do not use division in your solution.

var productify = function (array) {
  var result = [];
  var product = 1;
  for (var i = 0; i < array.length; i++ ) {
    result[i] = product;
    product *= array[i];
  }

  product = 1;
  for (var j = array.length - 1; j >= 0; j--) {
    result[j] *= product;
    product *= array[j];
  }

  return result;
}

console.log(productify([1, 7, 3, 4]));
