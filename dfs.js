//example 1 for unweighted shortest path;

const ex1 = [['w', 'x'], ['x', 'y'], ['z', 'y'],['z', 'v'],['w','v']];

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  const visit = new Set([nodeA]);
  const queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const [edge, count] = queue.shift();
    if(edge === nodeB) return count;
    for(let neighbor of graph[edge]) {
      if(!visit.has(neighbor)){
        visit.add(neighbor);
        queue.push([neighbor, count+1]);
      }
    }
  }
  return -1;
}

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if(!graph[a]) { graph[a] = []; }
    if(!graph[b]) { graph[b] = []; }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

console.log(shortestPath(ex1, 'x', 'z'));

//number of islands using dfs

const numberOfIsland = (grid) => {

}