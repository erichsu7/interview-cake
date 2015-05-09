// Implement a queue ↴ with 2 stacks ↴ . Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO).
// Optimize for the time cost of mm function calls on your queue. These can be any mix of enqueue and dequeue calls.
//
// Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

function TwoStackQueue () {
  this.inStack = [];
  this.outStack = [];
  this.count = 0;
};

TwoStackQueue.prototype.push = function (element) {
  this.inStack.push(element);
  this.count++;
};

TwoStackQueue.prototype.pop = function () {
  if (this.count === 0) { return }
  var returnedElement;

  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }

  this.count--;
  return this.outStack.pop();
};



var sq = new TwoStackQueue();
for (var i = 1; i <= 10; i++) {
  sq.push(i);
}

console.log(sq.inStack);
console.log(sq.outStack);

while (sq.count > 0) {
  console.log(sq.pop());
}
