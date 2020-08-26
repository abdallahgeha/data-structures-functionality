class Stack {
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

  push(data) {
    if (this.isFull()) return console.log("Stack Overflow!");
    this.container.push(data);
    return this;
  }

  pop() {
    if (this.isEmpty()) return console.log("Stack Underflow!");
    this.container.pop();
    return this;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.container[this.container.length - 1];
  }

  generateFromArray(values) {
    for (let i = 0; i < values.length; i++) {
      this.push(values[i]);
    }
    return this;
  }

  toArray() {
    return this.container;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  print() {
    for (let i = this.container.length - 1; i >= 0; i--) {
      console.log(`[\t${this.container[i]}\t]`);
    }
  }
}

module.exports = Stack;
