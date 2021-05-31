var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => a - b);
  let ans = [];
  while (deck.length) {
      ans.unshift(deck.pop());
      ans.unshift(ans.pop());
  }
  ans.push(ans.shift());
  return ans;
};