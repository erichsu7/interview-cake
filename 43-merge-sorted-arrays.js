// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
// Each order is represented by an "order id" (an integer).
//
// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
//
// For example:
//
//   my_array     = [3,4,6,10,11,15]
// alices_array = [1,5,8,12,14,19]
//
// print merge_arrays(my_array, alices_array)
// # prints [1,3,4,5,6,8,10,11,12,14,15,19]

var mergeSortedArrays = function (array1, array2) {
  var i = 0;
  var j = 0;
  var result = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  return result.concat(array1.slice(i)).concat(array2.slice(j));
}

console.log(mergeSortedArrays([3,4,6,10,11,15], [1,5,8,12,14,19]))
