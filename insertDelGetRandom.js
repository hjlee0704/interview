var RandomizedSet = function() {
  this.indexMap = new Map();
  this.list = [];
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if(this.indexMap.has(val)) return false;
  let len = this.list.length;
  this.list.push(val);
  this.indexMap.set(val, len);
  return true;
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  if(this.indexMap.has(val)) {
      let len = this.list.length;
      let index = this.indexMap.get(val);
      let newVal = this.list[len - 1];
      this.list[index] = newVal;
      this.indexMap.set(newVal, index);
      this.list.pop();
      this.indexMap.delete(val);
      return true;
  }
  return false;
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let len = this.list.length;
  let randomIndex = Math.floor(len * Math.random());
  return this.list[randomIndex];
};