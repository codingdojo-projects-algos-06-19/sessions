

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add2(node) {
    // console.log('add2 in node object', node, this);
    if (node.value < this.value) {
      // go left 
      if (this.left) {
        // go more left
        this.left.add2(node);
      } else {
        this.left = node;
      }
    } else {
      // go right 
      if (this.right) {
        // go more right 
        this.right.add2(node);
      } else {
        this.right = node;
      }
    }
  }

  contains(value) {
    console.log('llooking for value ' + value, "current value is " + this.value);

    if (this.value === value) {
      return true;
    }

    if (value < this.value) {
      // go left 
      if (this.left) {
        return this.left.contains(value);
      }
    } else {
      // go right 
      if (this.right) {
        return this.right.contains(value);
      }
    }

    return false;
  }

  print() {
    // console.log('moving.. .on node with value ' + this.value);
    if (this.left) {
      // go left 
      this.left.print();
    }

    console.log('node has value ' + this.value);

    if (this.right) {
      this.right.print();
    }
  }

  min() {
    return this.left ? this.left.min() : this.value;
    // (evaluate expression) ?(if true) : (if false);
    // if (this.left) {
    //   return this.left.min();
    // }

    // return this.value;
  }

  max() {
    return this.right ? this.right.max() : this.value;
  }

  size() {
    console.log("size in node with value " + this.value);
    let count = 1;

    if (this.left) {
      count += this.left.size();
      // count++;
    }

    if (this.right) {
      count += this.right.size();
      // count++;
    }
    console.log('our count is ' + count, "current node is " + this.value);
    return count;
  }
}


class Tree {
  constructor() {
    this.root = null;
  }

  add(node) {
    // console.log('original', node);
    if (!(node instanceof Node)) {
      node = new Node(node);
      // this.root has value 
      //   - loop
      // else 
      //   - place root
    }

    // console.log('is node', node)
    if (this.root) {
      // do stuff
      var currentNode = this.root;

      while (currentNode) {
        if (node.value < currentNode.value) {
          // go left 
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = node;
            break;
          }
        } else {
          // go  right 
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = node;
            break;
          }
        }
      }
    } else {
      this.root = node;
    }
  }

  add2(node) {
    if (!(node instanceof Node)) {
      node = new Node(node);
    }

    if (this.root) {
      // do stuff
      this.root.add2(node);
    } else {
      this.root = node;
    }
  }

  isEmpty() {
    return this.root === null;
    // if (this.root === null) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  contains(value) {
    if (this.isEmpty()) {
      return false;
    }

    return this.root.contains(value);
  }

  print() {
    if (this.isEmpty()) {
      return "tree is empty";
    }

    return this.root.print();
  }

  min() {
    if (this.isEmpty()) {
      return null;
    }

    return this.root.min();
  }

  max() {
    return this.isEmpty() ? null : this.root.max();
  }

  size() {
    return this.isEmpty() ? 0 : this.root.size();
  }
}

const tree = new Tree();

const node = new Node(23);

tree.add2(node);
tree.add2(17);
tree.add2(18);
tree.add2(27);
tree.add2(30);
tree.add2(11);
tree.add2(25);
tree.add2(45);
tree.add2(3);

console.log(tree.size());
