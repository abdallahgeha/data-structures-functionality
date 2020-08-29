const Queue = require("./queue");

class Graph {
  constructor() {
    this._nodes = new Map();
    this._edges = new Map();
    this._edgesCount = 0;
  }

  addNode(key, value) {
    this._nodes.set(key, new Node(key, value));
    if (!this._edges.has(key)) {
      this._edges.set(key, new Map());
    }
    return this._nodes.get(key);
  }

  hasNode(key) {
    return this._nodes.has(key);
  }

  removeNode(key) {
    if (!this.hasNode(key)) return false;

    this.removeEdges(key);
    this._nodes.delete(key);
    this._nodes.delete(key);
    return true;
  }

  nodesCount() {
    return this._nodes.size;
  }

  addEdge(srcKey, destKey, weight) {
    if (!this._nodes.has(srcKey)) throw new Error("start node not found");
    if (!this._nodes.has(destKey)) throw new Error("end node not found");

    this._edges.get(srcKey).set(destKey, +weight || 1);
    this._edgesCount += 1;
  }

  hasEdge(srcKey, destKey) {
    return (
      this.hasNode(srcKey) &&
      this.hasNode(destKey) &&
      this._edges.get(srcKey).has(destKey)
    );
  }

  getWeight(srcKey, destKey) {
    if (this.hasNode(srcKey)&& srcKey === destKey) return 0;
    if(!this.hasEdge(srcKey,destKey)) return null;
    return this._edges.get(srcKey).get(destKey)
  }

  removeEdge(srcKey, destKey) {
    if (!this.hasEdge(srcKey, destKey)) return false;

    this._edges.get(srcKey).delete(destKey);
    this._edgesCount -= 1;
    return true;
  }

  removeEdges(key) {
    if (!this.hasNode(key)) return 0;

    let removed = 0;
    this._edges.forEach((destEdges, srcKey) => {
      if (destEdges.has(key)) {
        this.removeEdge(srcKey, key);
        removed += 1;
      }
    });

    removed += this._edges.get(key).size;
    this._edgesCount -= this._edges.get(key).size;
    this._edges.set(key, new Map());
    return removed;
  }

  edgesCount() {
    return this._edgesCount;
  }

  traverseDfs(srcKey, cb, visited = new Set()) {
    if (!this.hasNode(srcKey) || visited.has(srcKey)) return;

    cb(this._nodes.get(srcKey));
    visited.add(srcKey);

    this._edges.get(srcKey).forEach((weight, destKey) => {
      this.traverseDfs(destKey, cb, visited);
    });
  }

  traverseBfs(srcKey, cb) {
    if (!this.hasNode(srcKey)) return;

    const queue = new Queue([srcKey]);
    const visited = new Set([srcKey]);

    while (!queue.isEmpty()) {
      const node = this._nodes.get(queue.dequeue());
      cb(node);
      this._edges.get(node.getKey()).forEach((weight, destKey) => {
        if (visited.has(destKey)) return;
        queue.enqueue(destKey);
        visited.add(destKey);
      });
    }
  }

  clear() {
    this._nodes = new Map();
    this._edges = new Map();
    this._edgesCount = 0;
  }


}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

module.exports = Graph
