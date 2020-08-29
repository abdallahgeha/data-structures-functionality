# JavaScript Data Structures  

This is an attempt by me to learn data structures that do not exist in JavaScript or ES6  
The point of it is using those data structures in learning algotrithms that are specific to certain data structures  
  
This repository contains JavaScript examples of many popular data structures.

*☝ Note that this project is meant to be used for learning and researching purposes 
only and it is **not** meant to be used for production.*

## Data Structures

A data structure is a particular way of organizing and storing data in a computer so that it can
be accessed and modified efficiently. More precisely, a data structure is a collection of data
values, the relationships among them, and the functions or operations that can be applied to
the data.

### Stack

In computer science, a **stack** is an abstract data type that serves 
as a collection of elements, with two principal operations:

* **push**, which adds an element to the collection, and
* **pop**, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its 
alternative name, LIFO (last in, first out). Additionally, a 
peek operation may give access to the top without modifying 
the stack. The name "stack" for this type of structure comes 
from the analogy to a set of physical items stacked on top of 
each other, which makes it easy to take an item off the top 
of the stack, while getting to an item deeper in the stack 
may require taking off multiple other items first.

### Queue

In computer science, a **queue** is a particular kind of abstract data 
type or collection in which the entities in the collection are 
kept in order and the principle (or only) operations on the 
collection are the addition of entities to the rear terminal 
position, known as enqueue, and removal of entities from the 
front terminal position, known as dequeue. This makes the queue 
a First-In-First-Out (FIFO) data structure. In a FIFO data 
structure, the first element added to the queue will be the 
first one to be removed. This is equivalent to the requirement 
that once a new element is added, all elements that were added 
before have to be removed before the new element can be removed. 
Often a peek or front operation is also entered, returning the 
value of the front element without dequeuing it. A queue is an 
example of a linear data structure, or more abstractly a 
sequential collection.

### Linked List  

In computer science, a **linked list** is a linear collection 
of data elements, in which linear order is not given by 
their physical placement in memory. Instead, each 
element points to the next. It is a data structure 
consisting of a group of nodes which together represent 
a sequence. Under the simplest form, each node is 
composed of data and a reference (in other words, 
a link) to the next node in the sequence. This structure
allows for efficient insertion or removal of elements 
from any position in the sequence during iteration. 
More complex variants add additional links, allowing 
efficient insertion or removal from arbitrary element 
references. A drawback of linked lists is that access 
time is linear (and difficult to pipeline). Faster 
access, such as random access, is not feasible. Arrays 
have better cache locality as compared to linked lists.

### Doubly Linked List

In computer science, a **doubly linked list** is a linked data structure that 
consists of a set of sequentially linked records called nodes. Each node contains 
two fields, called links, that are references to the previous and to the next 
node in the sequence of nodes. The beginning and ending nodes' previous and next 
links, respectively, point to some kind of terminator, typically a sentinel 
node or null, to facilitate traversal of the list. If there is only one 
sentinel node, then the list is circularly linked via the sentinel node. It can 
be conceptualized as two singly linked lists formed from the same data items, 
but in opposite sequential orders.

The two node links allow traversal of the list in either direction. While adding 
or removing a node in a doubly linked list requires changing more links than the 
same operations on a singly linked list, the operations are simpler and 
potentially more efficient (for nodes other than first nodes) because there 
is no need to keep track of the previous node during traversal or no need 
to traverse the list to find the previous node, so that its link can be modified.

### Tree

In computer science, a **tree** is a widely used abstract data 
type (ADT) — or data structure implementing this ADT—that 
simulates a hierarchical tree structure, with a root value 
and subtrees of children with a parent node, represented as 
a set of linked nodes.

A tree data structure can be defined recursively (locally) 
as a collection of nodes (starting at a root node), where 
each node is a data structure consisting of a value, 
together with a list of references to nodes (the "children"), 
with the constraints that no reference is duplicated, and none 
points to the root.

A simple unordered tree; in this diagram, the node labeled 7 has
two children, labeled 2 and 6, and one parent, labeled 2. The
root node, at the top, has no parent.

### Heap (data-structure)

In computer science, a **heap** is a specialized tree-based 
data structure that satisfies the heap property described
below.

In a *min heap*, if `P` is a parent node of `C`, then the
key (the value) of `P` is less than or equal to the
key of `C`.

In a *max heap*, the key of `P` is greater than or equal
to the key of `C`

The node at the "top" of the heap with no parents is 
called the root node.

### Graph

In computer science, a **graph** is an abstract data type 
that is meant to implement the undirected graph and 
directed graph concepts from mathematics, specifically
the field of graph theory

A graph data structure consists of a finite (and possibly 
mutable) set of vertices or nodes or points, together 
with a set of unordered pairs of these vertices for an 
undirected graph or a set of ordered pairs for a 
directed graph. These pairs are known as edges, arcs, 
or lines for an undirected graph and as arrows, 
directed edges, directed arcs, or directed lines 
for a directed graph. The vertices may be part of 
the graph structure, or may be external entities 
represented by integer indices or references.

## Supporting the project

You may support this project via pull requests or raising issues  
