const buildTree = (preorder, inorder) => {
  if (inorder.length < 1) return null;

  const rootVal = preorder.shift();
  const rootIndex = inorder.indexOf(rootVal);
  const rootNode = new TreeNode(rootVal);

  const left = inorder.slice(0, rootIndex);
  const right = inorder.slice(rootIndex + 1);

  rootNode.left = buildTree(preorder, left);
  rootNode.right = buildTree(preorder, right);

  return rootNode;
}