function MaxHeap () {
  this.heap = [];
  this.insert = function(val) {
    this.heap.push(val)
    self = this.heap.length - 1
    parent = Math.floor((self - 1) / 2)
    while (this.heap[self] > this.heap[parent]) {
      selfVal = this.heap[self]
      this.heap[self] = this.heap[parent]
      this.heap[parent] = selfVal
      self = parent
      parent = Math.floor((self - 1) / 2)
    }
    return this.heap
  }
  this.peek = function() {
    return this.heap[0]
  }
  this.pop = function() {
    popped = this.heap[0]
    this.heap[0] = this.heap.pop()
    self = 0
    child1 = 1
    child2 = 2
    while(this.heap[self] < this.heap[child1] || this.heap[self] < this.heap[child2]) {
      swapWith = this.heap[child1] < this.heap[child2] ? child2 : child1
      selfVal = this.heap[self]
      this.heap[self] = this.heap[swapWith]
      this.heap[swapWith] = selfVal
      self = swapWith
      child1 = (2 * swapWith) + 1
      child2 = (2 * swapWith) + 2
    }
    return popped
  }
  this.search = function() {
    
  }
  this.length = function() {
    return this.heap.length
  }
}

ordered = []
a= new MaxHeap()
a.insert(100)
a.insert(70)
a.insert(37)
a.insert(37)
a.insert(37)
a.insert(37)
a.insert(37)
a.insert(37)
a.insert(1)
a.insert(5)
a.insert(6)
length = a.length()
while (length > 0) {
  ordered.push(a.pop())
  length--
}
console.log(ordered)