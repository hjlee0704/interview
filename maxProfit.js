var maxProfit = function(prices) {

  let maxProfit = 0;
  let buyPrice = prices[0];

  for(let i=1;i<prices.length;i++){
      buyPrice = Math.min(prices[i], buyPrice)
      maxProfit = Math.max(prices[i] - buyPrice, maxProfit)
  }
  return maxProfit 
};
 