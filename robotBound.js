var isRobotBounded = function(instructions) {
  const origin = [0,0]
  let dir = 0;
  
  const moving = () => {
      for(let str of instructions){
          if(str === "R"){
              dir -= 1
              if(dir < 0) {
                  dir += 4;
              }
          } else if (str === 'L') {
              dir += 1
              if(dir > 3) {
                  dir = dir % 4;
              }
          } else {
              if(dir === 0){
                  origin[1] += 1
              } else if(dir === 1) {
                  origin[0] -= 1
              } else if(dir === 2) {
                  origin[1] -= 1
              } else {
                  origin[0] += 1
              }
          }
      }
  }
  
  let times = 0;
  
  while(times < 4){ 
      moving();
      console.log(origin)
      if(origin[0] === 0 && origin[1] === 0) {
          return true
      }
      times += 1
  }
  return false
  
};