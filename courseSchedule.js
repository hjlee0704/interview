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