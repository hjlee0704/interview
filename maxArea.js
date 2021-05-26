var maxArea = function(h, w, horizontalCuts, verticalCuts) {
  let m = Math.pow(10,9) + 7;
  horizontalCuts.sort((a,b) => a - b);
  verticalCuts.sort((a,b) => a - b);
  let hMax = 0;
  let vMax = 0;
  hMax = Math.max(hMax, horizontalCuts[0])
  vMax = Math.max(vMax, verticalCuts[0])
  for (let i = 1; i < horizontalCuts.length;i++) {
      let curDist = horizontalCuts[i] - horizontalCuts[i - 1]
      hMax = Math.max(hMax, curDist);
     // console.log(hMax);
  }
  let curDist = h - horizontalCuts[horizontalCuts.length - 1]
  hMax = Math.max(hMax, curDist);
  
  for (let i = 1; i < verticalCuts.length;i++) {
      let curDist = verticalCuts[i] - verticalCuts[i - 1]
      vMax = Math.max(vMax, curDist);
  }
  let curVDist = w - verticalCuts[verticalCuts.length - 1];
  vMax = Math.max(vMax, curVDist)
  
  //console.log( hMax, vMax);
  return (hMax * vMax) % m;
};