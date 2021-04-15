var pacificAtlantic = function(matrix) {
    if(!matrix.length) return []
    
    const col = matrix[0].length;
    // Add padding
    matrix.unshift(Array(col).fill(-1))
    matrix.push(Array(col).fill(-1)) 
    matrix.forEach(row => {
        row.unshift(-1)
        row.push(-1);
    })
    
    const rNum = matrix.length, cNum = matrix[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const pacific = matrix;
    const atlantic = [...matrix.map(row => [...row])]; // deep clone
    const output = []
    
    function callDFS(r, c, arr) {
        const val = arr[r][c]
        arr[r][c] = '#'
        
        for(let [dr, dc] of dir) {
            dr += r;
            dc += c;
            if(arr[dr] && arr[dr][dc] !== undefined && 
               arr[dr][dc] !== '#' && arr[dr][dc] !== -1 && 
               arr[dr][dc] >= val) callDFS(dr, dc, arr);
        }
    }
    
    for(let c = 1; c < cNum-1; c++) {
        callDFS(rNum-1, c, atlantic); // bottom 
        callDFS(0, c, pacific); // top
    }
    
    for(let r = 1; r < rNum-1; r++) {
        callDFS(r, cNum-1, atlantic); // right
        callDFS(r, 0, pacific); // left
    }
    
    for(let r = 1; r < rNum-1; r++) {
        for(let c = 1; c < cNum-1; c++) {
            if(pacific[r][c] === '#' &&
               atlantic[r][c] === '#') 
                output.push([r-1, c-1]);
        }
    }
    return output;
};