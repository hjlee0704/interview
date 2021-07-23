var copyRandomList = function(head, cloneMap=new Map()) {
  if (!head) {
      return null;
  }
  if (cloneMap.has(head)) {
      return cloneMap.get(head);
  }
  let clone = new Node(head.val, null, null);
  cloneMap.set(head, clone);
  clone.next = copyRandomList(head.next, cloneMap);
  clone.random = copyRandomList(head.random, cloneMap);
  return clone;
  // T.C: O(N)
  // S.C: O(N)
};