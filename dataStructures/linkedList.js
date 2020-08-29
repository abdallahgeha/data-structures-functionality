class LinkedList {
  constructor(values) {
    this.head = null;
    this.length = 0;
    if (values && Array.isArray(values)) {
      this.generateFromArray(values);
    } else if (values) {
      this.generateFromArray(arguments);
    }
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
    this.length += 1;
    return this;
  }

  append(data) {
    this.getTail().next = new Node(data);
    this.length++;
    return this;
  }

  generateFromArray(values) {
    for (let i = values.length - 1; i >= 0; i--) {
      this.prepend(values[i]);
    }
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index == 0) return this.prepend(value);

    const previousNode = this.getByIndex(index - 1);
    if (previousNode == null) return this;

    previousNode.next = new Node(value, previousNode.next);
    this.length++;

    return this;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
    return this;
  }

  removeAtIndex(index) {
    if (index == 0) return this.removeHead();

    const previousNode = this.getByIndex(index - 1);
    if (previousNode == null) return this;

    previousNode.next = previousNode.next.next;
    this.length--;

    return this;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;

      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  getTail() {
    return this.getByIndex(this.length - 1);
  }

  pop() {
    const firstElement = this.head;
    this.head = this.head.next;
    this.length--;
    return firstElement;
  }


  concat(newLinkedList) {
    const tail = this.getTail();
    tail.next = newLinkedList.head;
    this.length += newLinkedList.length;
    return this;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
