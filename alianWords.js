var isAlienSorted = function(words, order) {
  let map = new Map();
  let result = true;
  for (let index = 0; index < order.length; index++) {
      map[order[index]] = index;
  };
  map[undefined] = -1;
  
  for (let i = 0; i < words.length - 1; i++) {
      let firstWord = words[i];
      let secondWord = words[i+1];
      let size = Math.min(firstWord.length, secondWord.length);
      let index = 0;
      
      while (firstWord[index] === secondWord[index] && index < size) {
          index++;
      }
      //console.log(index,map[firstWord[index]] , map[secondWord[index]] );
      if (map[firstWord[index]] > map[secondWord[index]]) {
          //console.log('here')
          result = false;
      }
  }
  
  return result;
  
};