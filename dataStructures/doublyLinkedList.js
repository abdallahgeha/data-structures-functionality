export default class DoublyLinkedList {
  constructor(values) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (values && Array.isArray(values)) {
      this.generateFromArray(values);
    } else if (values) {
      this.generateFromArray(arguments);
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head);

    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;

    newNode.previous = this.tail;

    this.tail = newNode;

    this.length++;
    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value == value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          this.head = deletedNode.next;

          if (this.head) {
            this.head.previous = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      this.length--;
      currentNode = currentNode.next;
    }

    return deletedNode;
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

    previousNode.next = new Node(value, previousNode.next, previousNode);
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
    const nextNode = this.getByIndex(index + 1);
    if (previousNode == null || nextNode == null) return this;

    previousNode.next = previousNode.next.next;
    nextNode.previous = previousNode;
    this.length--;

    return this;
  }

  removeTail() {
    if (!this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    const deletedTail = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

    this.length--;
    return deletedTail;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return deletedHead;
  }

  concat(newLinkedList) {
    const tail = this.tail;
    tail.next = newLinkedList.head;
    newLinkedList.head.previous = tail
    this.length += newLinkedList.length;
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

  generateFromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      prevNode = currNode.previous;

      currNode.next = prevNode;
      currNode.previous = nextNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} <-> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}
