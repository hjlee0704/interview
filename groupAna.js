var groupAnagrams = function(strs) {
  if(strs.length == 1) {
      return [strs]
  }
  const setToComb = new Map()
  
  for(let i=0; i<strs.length;i++) {
      const sorted = strs[i].split("").sort().join("")
      if(setToComb.has(sorted)) {
          setToComb.set(sorted, [...setToComb.get(sorted), strs[i]])
      } else {
          setToComb.set(sorted, [strs[i]])
      }
  }
  const result = []
  for(const value of setToComb.values()) {
      result.push(value)
  }
  return result
};
