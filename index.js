const LinkedList = require("./dataStructures/linkedList");
const Stack = require("./dataStructures/stack");
const Queue = require("./dataStructures/queue");
const Tree = require("./dataStructures/tree");

function printDataStructures(dataStructures) {
  dataStructures.forEach((dataStructure) => dataStructure.print());
}

let linkedList = new LinkedList();
let stack = new Stack();
let queue = new Queue();
let tree = new Tree("CEO");

linkedList.insertAtHead(1).insertAtHead(2).insertAtHead(3);
stack.push(1).push(2).push(3);

queue.enqueue(1).enqueue(2).enqueue(3);

tree
  .add("VP of happy", "CEO")
  .add("VP of potato", "CEO")
  .add("VP of sad", "CEO")
  .add("Director of aaa", "VP of happy")
  .add("director of potato", "VP of sad")
  .remove("VP of sad", "CEO");

printDataStructures([linkedList, stack, queue, tree]);
