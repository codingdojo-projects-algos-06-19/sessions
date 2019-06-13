

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

  removeFront() {
    if (!this.isEmpty()) {
      this.head = this.head.next;
    }
  }

  isEmpty() {
    return this.head === null;
  }

  front() {
    return this.isEmpty() ? null : this.head.value;
    // (expression) ? (if true) : (if false);

    if (this.isEmpty()) {
      return null;
    }
    
    return this.head.value;
  }

  contains(value) {
    var runner = this.head;

    while (runner !== null) {
      if (runner.value === value) {
        return true;
      }

      runner = runner.next;
    }

    return false;
  }

  length() {
    var count = 0;
    var current = this.head;
    
    while (current !== null) {
      count++;
      current = current.next;
    }

    return count;
  }

  display() {
    console.log("printing list");
    var current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  print() {
    console.log("printing list");

    this.traverse(node => console.log(node.value));
  }

  min() {
    var currentMin = this.isEmpty() ? null : this.head.value;
    var current = this.head;

    while (current !== null) {
      if (current.value < currentMin) {
        currentMin = current.value;
      }

      current = current.next;
    }

    return currentMin;
  }

  min2() {
    var currentMin = this.isEmpty() ? null : this.head.value;

    this.traverse(function (node) {
      if (node.value < currentMin) {
        currentMin = node.value;
      }
    });

    return currentMin;
  }

  traverse(callback) {
    var current = this.head;
    console.log("calling traverse");
    while (current !== null) {
      callback(current);
      current = current.next;
    }

    console.log("traverse complete");
  }

  max2() {
    var currentmax = this.isEmpty() ? null : this.head.value;

    this.traverse(function (node) {
      console.log("inside our anon func", node.value);
      if (node.value > currentmax) {
        currentmax = node.value;
      }

      console.log('current max is ' + currentmax);
    });

    return currentmax;
  }

  max() {
    var currentmax = this.isEmpty() ? null : this.head.value;
    var current = this.head;

    while (current !== null) {
      if (current.value > currentmax) {
        currentmax = current.value;
      }

      current = current.next;
    }

    return currentmax;
  }
}

// const node1 = new Node(234);
// const node2 = new Node(9999);
const list = new List();

// node1.next = node2;
// list.head = node1;
list.addFront(234);
list.addFront(9999);
list.addFront(4);
list.addFront(765);
list.addFront(345);
list.addFront(867);
list.addFront(87);
list.addFront(12);
// list.removeFront();
// console.log(list);
// console.log(list.front());

// console.log(list.contains(87));
// console.log(list.contains(-345));
// console.log(list.length());
console.log(list.print());
console.log(list.min2());
console.log(list.max2());

// { head: { value: 9999, next: { value: 234, next: null } } }

