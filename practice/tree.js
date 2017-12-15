function TreeNode(val) {
  this.val = val;
  this.left = undefined;
  this.right = undefined;

  this.insert = function(val) {
    if (val < this.val) {
      if (this.left) {
        this.left.insert(val)
      } else {
        this.left = new TreeNode(val)
      }
    } else if (val > this.val) {
      if (this.right) {
        this.right.insert(val)
      } else {
        this.right = new TreeNode(val)
      }
    }
  }

  this.lookup = function(val) {
    if (this.val == val) {
      return this;
    }

    if (val < this.val && this.left) {
      return this.left.lookup(val)
    } else if (val > this.val && this.right) {
      return this.right.lookup(val)
    }

    return undefined
  }

  this.delete = function(val) {
    
  }
}

let rootNode = new TreeNode(5)
rootNode.insert(3)
rootNode.insert(7)
rootNode.insert(4)
rootNode.insert(6)

debugger
