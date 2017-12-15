function Node(key) {
  this.key = key;
  this.left = null;
  this.right = null;

  this.insert = function(key) {
    if (this.key < this.key) {
      if (this.left) {
        this.left.insert(key)
      } else {
        this.left = new Node(key)
      }
    }
    if (this.key > this.key) {
      if (this.right) {
        this.right.insert(key)
      } else {
        this.right = new Node(key)
      }
    }
  }

  this.lookup =  function(key) {
    //if lookup == key return seld
    // if less than this.left.lookup
    //else tis.right.lookup
  }

  this.delete = function(key) {
    // two possible methods
    // interview method -> cheat not reall method
    // cheat method , add deleted flag on node

    //real way
    //no leaf(l, r) nodes, jsut remove it
    //one child, remove it and replace it with child
    // two children, walk to next biggest thing, thhen go as far left as possible
  }

}
