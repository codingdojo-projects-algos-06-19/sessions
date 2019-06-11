

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    const node = new Node(value);

    node.next = this.head;

    this.head = node;
  }
}

// const node1 = new Node(234);
// const node2 = new Node(9999);
const list = new List();

// node1.next = node2;
// list.head = node1;
list.addFront(234);
list.addFront(9999);

console.log(list);

// { head: { value: 9999, next: { value: 234, next: null } } }

