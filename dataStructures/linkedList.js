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

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length += 1;
    return this;
  }

  generateFromArray(values) {
    for (let i = values.length - 1; i >= 0; i--) {
      this.insertAtHead(values[i]);
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
    if (index == 0) return this.insertAtHead(value);

    const previousNode = this.getByIndex(index - 1);
    if (previousNode == null) return this;

    previousNode.next = new LinkedListNode(value, previousNode.next);
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

  append(data) {
    this.getTail().next = new LinkedListNode(data);
    this.length++;
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

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;
