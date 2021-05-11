var maxBoxesInWarehouse = function(boxes, warehouse) {
  for(let i=1; i<warehouse.length; i++){
      if(warehouse[i] > warehouse[i-1]){
          warehouse[i] = warehouse[i-1]
      }
  }
  
  boxes.sort((a,b) => a-b)

 let box = 0
 let count = 0
 
 for(let i=warehouse.length -1; i>-1; i--){
     if(boxes[box] <= warehouse[i]){
         count ++
         box ++
     }   
 }
  
  return count
};