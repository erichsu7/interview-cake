// Write a function fib() that a takes an integer nn and returns the nth fibonacci number.
// Let's say our fibonacci series is 0-indexed and starts with 0. So:
//
//   fib(0) # => 0
// fib(1) # => 1
// fib(2) # => 1
// fib(3) # => 2
// fib(4) # => 3
// ...


//Iterative implementation
var fibonacci = function (number) {
  if (number === 0) { return 0; }
  if (number === 1) { return 1; }
  var prevPrevFib = 0;
  var prevFib = 1;
  for (var i = 2; i <= number; i++) {
    currentFib = prevPrevFib + prevFib;
    prevPrevFib = prevFib;
    prevFib = currentFib;
  }

  return currentFib;
}


// Recursive implementation
// var fibonacci = function (number) {
//   if (number === 0) { return 0; }
//   if (number === 1) { return 1; }
//
//   return fibonacci(number - 1) + fibonacci(number - 2);
// }

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
