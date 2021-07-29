//bfs method

var canFinish = function(numCourses, prerequisites) {
  let graph = new Map();
  let inDegree = new Map();
  let queue = [];
  let result = [];
  for (let num =0; num < numCourses; num++) {
      inDegree.set(num, 0);
  }
  
  for (let course of prerequisites) {
      if (!graph.has(course[0])) {
          graph.set(course[0], []);
      }
      graph.get(course[0]).push(course[1]);
      inDegree.set(course[1], inDegree.get(course[1])+ 1)
  }
  
  for (const [key, value] of inDegree.entries()) {
    if (value === 0) {
        queue.push(key);
    }
  }
  
  while (queue.length > 0) {
      let course = queue.shift();
      result.push(course);
      if(graph.has(course)) {
          for (let index = 0; index < graph.get(course).length; index++) {
              let childCourse = graph.get(course)[index];
              inDegree.set(childCourse, inDegree.get(childCourse) - 1);
              if (inDegree.get(childCourse)  === 0) {
                  queue.push(childCourse);
              }

          }
      }    
  }
  
  if(result.length === numCourses) {
      return true;
  }
  return false;

}

//dfs

var canFinish = function(numCourses, prerequisites) {
  const arr =  Array.from({length:numCourses}).map(()=>new Array());
  
  for(let i=0;i<prerequisites.length;++i){
      arr[prerequisites[i][0]].push(prerequisites[i][1])
  }
  console.log(arr);
  const visited = new Array(numCourses).fill(0); // initially all the nodes are unvisited
  
  for(let i=0;i<numCourses;i++){
      if(visited[i]===0){
          if(isDeadLock(visited,arr,i)) return false;
      }        
  }
  
  return true;
  
  function isDeadLock(visited,arr,currIdx){
      
  // deadlock formed
      if(visited[currIdx]===2){
          return true;
      }
      // currently visiting
      visited[currIdx]=2;
      
      for(let i=0;i<arr[currIdx].length;i++){
          if(visited[arr[currIdx][i]]!==1){
              if(isDeadLock(visited,arr,arr[currIdx][i])){
                  return true
              }
          }
      }
      // already visited
      visited[currIdx]=1;
      return false
  }
  
};