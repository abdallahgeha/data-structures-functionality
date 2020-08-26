const LinkedList = require("./dataStructures/linkedList");
/*
let ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(12);

let array = [2, 3, 1, 3];
let ll2 = new LinkedList(array)
let ll3 = new LinkedList(1,2,3)

console.log(ll.length);
console.log(ll2.length)
console.log(ll2.getByIndex(2).value)
console.log(ll3.length)
ll3.print()
ll3.insertAtIndex(2, 99).insertAtHead(44).removeHead().removeAtIndex(2)
ll3.print()
*/

const Stack = require('./dataStructures/stack')

let s = new Stack()

s.generateFromArray([2,3,4,5,2,1,2,3,4,4,3])
console.log(s.count)
console.log(s.peek())
s.print()

let a = s.toArray()
console.log(a)