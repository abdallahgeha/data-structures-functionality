const Queue = require("./queue");

class Tree {
  constructor(data) {
    this.node = new Node(data);
    this._root = this.node;
    return this;
  }

  traverseDF(callback) {
    (function recurse(currentNode) {
      for (let i = 0, length = currentNode.children.length; i < length; i++) {
        recurse(currentNode.children[i]);
      }

      callback(currentNode);
    })(this._root);

    return this;
  }

  traverseBF(callback) {
    let queue = new Queue();

    queue.enqueue(this._root);

    let currentTree = queue.dequeue();

    while (currentTree) {
      for (let i = 0, length = currentTree.children.length; i < length; i++) {
        queue.enqueue(currentTree.children[i]);
      }

      callback(currentTree);
      currentTree = queue.dequeue();
    }

    return this;
  }

  contains(callback, traversal) {
    if (traversal === "BF" || traversal === "bf" || traversal === "Bf") {
      this.traverseBF(callback);
    } else {
      this.traverseDF(callback);
    }
  }

  add(data, toData, traversal) {
    let child = new Node(data);
    let parent = null;
    let checkParent = (node) => {
      if (node.data === toData) {
        parent = node;
      }
    };

    this.contains(checkParent, traversal);

    if (parent) {
      parent.children.push(child);
      child.parent = parent;
    } else {
      return console.log("cannot add node to no parent");
    }

    return this;
  }

  remove(data, fromData, traversal) {
    let parent = null;
    let childToRemove = null;
    let index;

    let checkParent = (node) => {
      if (node.data === fromData) {
        parent = node;
      }
    };

    this.contains(checkParent, traversal);

    if (parent) {
      index = this._findIndex(parent.children, data);

      if (index === undefined) {
        return console.log("node to remove does not exist");
      } else {
        parent.children.splice(index, 1);
      }
    } else {
      return console.log("Parent does not exist");
    }

    return this;
  }

  _findIndex(arr, data) {
    let index;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].data === data) {
        index = i;
      }
    }

    return index;
  }

  print() {
    this.traverseBF((node) => console.log(node.data));
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

module.exports = { Tree, Node };
