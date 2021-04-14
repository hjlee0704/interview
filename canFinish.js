const buildAdj = (n, edges) => {
  const adjList = Array.from({length: n}, () => []);
  
  for (let edge of edges) {
      let [src, dest] = edge;
      adjList[src].push(dest);
  }
  return adjList
}

const dfsCycle = (node, adjList, visited, arrive, depart) => {
  arrive[node]++;
  visited[node] = true;
  
  for (let neighbor of adjList[node] ) {
      if(!visited[neighbor]) {
          visited[neighbor] = true;
          if(dfsCycle(neighbor, adjList, visited, arrive, depart)) {
              return true;
          }
      } else if(depart[neighbor] === 0) {
          return true;
      }
  }
  depart[node]++;
  return false;
}
var canFinish = function(numCourses, prerequisites) {
  //empty result = [];
  //iterate prequeisites
      //if(result[preq(ind)]) {
          //if(result[preq(index) not contains preq(value)]) 
              // add value array [{0:[1]},] 
          //else if(result(preq[index]= value  )) {
          // then compare existing result key with preq b
          // if they are true =  then return false 
      // else append new preq = a to key and preq, b to value 
  // return true;
  const adjList = buildAdj(numCourses, prerequisites);
  const visited = {};
  const arrive = Array.from({length: numCourses}, () => 0);
  const depart = Array.from({length: numCourses}, () => 0);
  
  for (let vertext = 0; vertext < adjList.length; vertext++) {
      if(!visited[vertext]) {
          if(dfsCycle(vertext, adjList, visited, arrive, depart)) {
              return false;
          }
      }
  }
  
  return true;
};