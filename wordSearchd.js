var WordDictionary = function() {
  this.list = new Trie();
  
  
};

//b   d    m
//a   a    a
//d   d    d

/** 
* @param {string} word
* @return {void}
*/
class Trie {
  constructor() {
      this.children = {};
      this.isEnd = false;
  }
}

WordDictionary.prototype.addWord = function(word) {
  let currNode = this.list; 
  //let currIndex = 0;
  for (let char of word) {
      if(!currNode.children[char]) {
          currNode.children[char] = new Trie();
      } 
      currNode = currNode.children[char];
  }
  currNode.isEnd = true;
 // console.log(this.list)
  return null;
};

/** 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
const searchHelper = (currentNode, i) => {
      
      // if we reach the i that's the length of word and currentNode is a word ending, word exists.
      if (i === word.length) return currentNode.isEnd
      
      const char = word[i]
      
      // if char is a dot, that means we can match it with any letter.
      // to do that programmatically, we go through all of the children of the current node. why?
      // we don't know which, if any, of the children can use the dot to make the given string.
      // so we go through all of them and check if any of them can return true.
      if (char === '.') {
          for (const char of Object.keys(currentNode.children)) {
              const child = currentNode.children[char];
              if (searchHelper(child, i + 1)) return true
          }
          
          // if no child can make use of the dot to come up with the given word,
          // then even the alternative version (e.g 'pad') 
          // of the given string (e.g 'pa.') doesn't exist in our dictionary.
          return false
      } 
      
      // if char isn't a dot, it's more straightforward...
      else {
          // looking for a letter that should come after another and can't find it?
          // that means the word doesn't exist in our dictionary so return false.
          if (!(char in currentNode.children)) return false
          
          // go on to the next node in our dictionary and the next letter in the word
          return searchHelper(currentNode.children[char], i + 1)
      }
  }
  
  // we call this function by starting at our root node with the index for the first letter in the string
  return searchHelper(this.list, 0)
  
};