

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add2(node) {
    console.log('add2 in node object', node, this);
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

console.log(tree)
