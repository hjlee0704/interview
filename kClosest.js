var kClosest = function(points, k) {
  points.sort((a,b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]));

    return points.slice(0, k);
    
};

var kClosest = function(points, K) {
  let heap = new MaxHeap();
  
  for(const [x,y] of points){
      let distance = Math.sqrt((x*x)+(y*y));
      
      heap.insert(new Point(distance,[x,y]))
      if(heap.size()>K){
          heap.extractMax();
      }
  }
  
  const output = [];
  for(const value of heap.values()){
      output.push(value.coordinate);
  }
  return output;
  
};

class Point{
  constructor(distance, point){
      this.distance = distance;
      this.coordinate = point;
  }
}

class MaxHeap{
  constructor(){
      this.heap = [];
  }
  values(){
      return this.heap;
  }
  size(){
      return this.heap.length;
  }
  insert(point){
      this.heap.push(point);
      this.bubbleUp();
  }
  bubbleUp(){
      let index = this.heap.length-1;
      while(index>0){
          let element = this.heap[index]
          let parentIndex = Math.floor((index-1)/2);
          let parent = this.heap[parentIndex]
          if(parent.distance > element.distance) break;
          this.heap[index] = parent;
          this.heap[parentIndex] = element;
          index = parentIndex;
      }
  }
  extractMax(){
      let max;
      if(this.heap.length){
          max = this.heap[0];
          if(this.heap.length>1){
              this.heap[0] = this.heap.pop();
              this.sinkDown(0);
          }else{
              this.heap.pop();
          }
      }
      return max;
  }
  sinkDown(index){
      let left = 2*index+1;
      let right = 2*index+2;
      let largest = index;
      let length = this.heap.length;
      if(left<length && this.heap[left].distance > this.heap[largest].distance){
          largest=left;
      }
      if(right<length && this.heap[right].distance > this.heap[largest].distance){
          largest=right;
      }
      if(largest!==index){
          [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]];
          this.sinkDown(largest);
      }
  }
}