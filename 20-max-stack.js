// You've implemented a Stack class, but you want to be able to access the largest element in a stack.
// Here's the Stack class you have:
//
//   class Stack:
//
//     # intialize an empty list
//     def __init__(self):
//         self.items = []
//
//     # push a new item to the last index
//     def push(self, item):
//         self.items.append(item)
//
//     # remove the last item
//     def pop(self):
//         # if the stack is empty, return None
//         # (it would also be reasonable to throw an exception)
//         if not self.items: return None
//
//         return self.items.pop()
//
//     # see what the last item is
//     def peek(self):
//         # if the stack is empty, return None
//         if not self.items: return None
//
//         return self.items[len(self.items)-1]
// Use your Stack class to implement a new class MaxStack with a function get_max() that returns the largest element in the stack. get_max() should not remove the item.
//
// Your stacks will contain only integers.
//

function MaxStack () {
  this.max;
  this.array = [];
}

MaxStack.prototype.push = function (number) {
  if (!this.max) { this.max = number; }

  this.array.push([number, this.max]);
  this.max = Math.max(this.max, number);
  return number;
}

MaxStack.prototype.pop = function () {
  var poppedPair = this.array.pop();
  this.max = poppedPair[1];
  return poppedPair[0];
}

MaxStack.prototype.getMax = function () {
  return this.max;
}

var ms = new MaxStack();
for (var i = 0; i < 10; i++) {
  ms.push(Math.floor(Math.random() * 100));
  console.log(ms.array);
  console.log(ms.getMax());
}

while (ms.array.length > 0) {
  console.log(ms.pop());
  console.log(ms.array);
  console.log(ms.getMax());
}
