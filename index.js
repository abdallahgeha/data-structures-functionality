const LinkedList = require("./dataStructures/linkedList");
const Stack = require("./dataStructures/stack");

function printDataStructures(dataStructures) {
  dataStructures.forEach((dataStructure) => dataStructure.print());
}

let linkedList = new LinkedList();
let stack = new Stack();

linkedList.insertAtHead(1).insertAtHead(2).insertAtHead(3);
stack.push(1).push(2).push(3);

printDataStructures([linkedList, stack]);
