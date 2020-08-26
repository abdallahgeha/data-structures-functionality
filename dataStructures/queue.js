class Queue {
  constructor(maxSize) {
    this.container = [];
    this.maxSize = maxSize || 10;
  }

  get count() {
    return this.container.length;
  }

  isEmpty() {
    return this.count == 0;
  }

  isFull() {
    return this.count >= this.maxSize;
  }

  enqueue(data) {
    if (this.isFull()) return console.log("Queue Overflow!");
    this.container.push(data);
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return console.log("Queue Underflow!");

    return this.container.shift();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.container[0];
  }

  toArray() {
    return this.container;
  }

  clear() {
    this.container = [];
  }

  print() {
    let output = "";
    for (let i = this.container.length - 1; i >= 0; i--) {
      output += `[${this.container[i]}] `;
    }
    console.log(output);
  }
}

module.exports = Queue;
