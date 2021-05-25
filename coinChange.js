var coinChange = function(coins, amount) {
  let res;
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  //console.
  for (let coin of coins) {
      for (let i = 1; i < dp.length; i++) {
          if (coin <= i) {
              let remain = i - coin;
              dp[i] = Math.min(dp[i], dp[remain] + 1);
          }
      }
  }
 // console.log(dp);
  return dp[amount] === Infinity ? -1 : dp[amount];
};