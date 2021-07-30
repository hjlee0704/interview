

/**
 * @param {number[]} sticks
 * @return {number}
 */
 var connectSticks = function(sticks) {
  let sum = 0
  let minHeap = new Heap((a,b) => a - b)
  
  sticks.forEach(stick => minHeap.push(stick))
  
  while (minHeap.length > 1) {
      let combine = minHeap.pop() + minHeap.pop()
      sum += combine
      minHeap.push(combine)
  }

  return sum
};

class Heap {
constructor(compare) {
  this.values = [],
  this.compare = compare
  this.length = 0
}

push(val) {
  this.length++
  this.values.push(val)
  this.bubbleUp()
}

bubbleUp() {
  let newIndex = this.values.length - 1
  let newVal = this.values[newIndex]

  while (newIndex > 0) {
    let parentIndex = Math.floor((newIndex - 1) / 2)
    let parentValue = this.values[parentIndex] 

    if (this.compare(parentValue, newVal) > 0) {
      this.values[parentIndex] = newVal
      this.values[newIndex] = parentValue

      newIndex = parentIndex
    } else {
      break
    }
  }
}

pop() {
  this.length--
  let removedVal = this.values[0]
  let endVal = this.values.pop()

  if (this.values.length > 0) {
    this.values[0] = endVal

    this.bubbleDown()
  }

  return removedVal
}

bubbleDown() {
  let parentIndex = 0
  let parentValue = this.values[0]

  while (true) {
    let swap = null
    let leftIndex = 2 * parentIndex + 1
    let rightIndex = 2 * parentIndex + 2
    let leftChild, rightChild

    if (leftIndex < this.values.length) {
      leftChild = this.values[leftIndex]

      if (this.compare(parentValue, leftChild) > 0) {
        swap = leftIndex
      }
    }

    if (rightIndex < this.values.length) {
      rightChild = this.values[rightIndex]

      if (
        (swap === null && this.compare(parentValue, rightChild) > 0) ||
        (swap !== null && this.compare(leftChild, rightChild) > 0)
      ) {
        swap = rightIndex
      }
    }

    if (swap === null) {
      break
    } else {
      this.values[parentIndex] = this.values[swap]
      this.values[swap] = parentValue

      parentIndex = swap
    }
  }
}

  peek() {
    return this.values[0]
  }
}
