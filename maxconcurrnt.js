
var jobScheduling = function(startTime, endTime, profit) {
  let maxTime = 0;
  let operations = [];
  let maxProfit = 0;
  for(let time = 0; time < endTime.length; time++) {
      maxTime = Math.max(endTime[time], maxTime); 
      operations.push([startTime[time], endTime[time], profit[time]]);
  }
  let profitChart = new Array(maxTime+1).fill(0);
  for(let operate = 0; operate < operations.length; operate++) {
      let start = operations[operate][0] +1;
      let end = operations[operate][1];
      let gain = operations[operate][2];
    //  console.log(operations[operate], profitChart)
      for (let chartIndex = start; chartIndex <= end; chartIndex++) {
          profitChart[chartIndex] += gain;
         //console.log(profitChart[chartIndex])
      } 
  }
  for(let currProfit of profitChart) {
      maxProfit = Math.max(maxProfit, currProfit);
  }
  return maxProfit;  
};