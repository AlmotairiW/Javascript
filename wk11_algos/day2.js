// Singly Linked Lists

// https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  insertAtBack(data) {
    // if this.isEmpty
    // add to head
    if (this.isEmpty()) {
      this.head = new Node(data);
    } else {
      // go to the end of the list (tail)
      let runner = this.head;
      while (runner.next !== null) {
        runner = runner.next;
      }
      runner.next = new Node(data);
    }
  }

  seedFromArr(arr) {
    // for loop
    for (let i = 0; i < arr.length; i++) {
      this.insertAtBack(arr[i]);
    }
  }

  insertAtFront(data) {
    // YOUR CODE HERE
    if (this.isEmpty()) {
      this.head = new Node(data);
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  removeHead() {
    // YOUR CODE HERE
    this.head = this.head.next;
  }

  average() {
    // YOUR CODE HERE
    this.runner = this.head;
    let sum = 0;
    let count = 0;
    while (this.runner !== null) {

        count+= 1;
        sum += this.runner.data;
        this.runner = this.runner.next;
    }
    console.log(sum/count);

  }

  display() {
    this.runner = this.head;

    while (this.runner !== null) {
        console.log(single.runner.data);
        this.runner = this.runner.next;
    }
    }
}

const single = new SinglyLinkedList();

single.insertAtFront(1);
single.insertAtFront(2);
single.insertAtFront(3);
single.insertAtFront(6);
single.average();
// single.removeHead();
// single.display();
