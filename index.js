const LinkedList = require("./dataStructures/linkedList");
const Stack = require("./dataStructures/stack");
const Queue = require('./dataStructures/queue')

function printDataStructures(dataStructures) {
  dataStructures.forEach((dataStructure) => dataStructure.print());
}

let linkedList = new LinkedList();
let stack = new Stack();
let queue = new Queue();

linkedList.insertAtHead(1).insertAtHead(2).insertAtHead(3);
stack.push(1).push(2).push(3);
queue.enqueue(1).enqueue(2).enqueue(3);

printDataStructures([linkedList, stack, queue]);
