/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
  //input array of array that tells connections btwen cities
  //output total number of provinces.
  
  //declare hashmap to store which city is connected to each other
  //delcare var to get total num of provinces
  let hash = {};
  let visit = {};
  let result = 0;
  // declare another object to store if visited or not
  for (let i = 0; i < isConnected.length; i++) {
      let city = isConnected[i];
      hash[i+1] = [];
      for (let j = 0; j < city.length;  j++) {
          if (j === i) continue;
          if (city[j] !== 0) {
              hash[i+1].push(j+1)
          }
          visit[i+1] = false;
      }
  }
  for (const [key, value] of Object.entries(hash)) {
      if(visit[key] === true) {
          continue;
      }
      let stack = [key];
      result += 1;
      while (stack.length > 0) { 
          let city = stack.pop();
          if(visit[city] === true) {
              continue;
          }
          visit[city] = true;
          for (let con = 0; con < hash[city].length; con++) {
              stack.push(hash[city][con]);
          }
      }
      
  }