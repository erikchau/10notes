function Node (value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.root = null;

  this.addStart = function(value) {
    var node = new Node(value)l
    node.next = root;
    this.root = node;
  }
  this.addEnd = function(value) {
    var node = new Node(value);
    var prev = null;
    var current = this.root;

    while (current) {
      prev = current;
      current = current.next;
    }

    if (prev) {
      prev.next = node;
    } else {
      this.root = node
    }
  }
  this.addAt = function(value, index) {
    var node = new Node(value);

    var prev = null;
    var current = root;

    while (current) {

    }
  }

  this.deleteStart = function() {
    
  }
  this.deleteEnd
  this.deleteAt

  this.get

  this.indexOf

  this.print
}

//LOL Apply Academy
