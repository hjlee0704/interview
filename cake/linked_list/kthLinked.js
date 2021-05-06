function kthToLastNode(k, head) {

  if (k < 1) {
    throw new Error(`Impossible to find less than first to last node: ${k}`);
  }

  // STEP 1: get the length of the list
  // Start at 1, not 0
  // else we'd fail to count the head node!
  let listLength = 1;
  let currentNode = head;

  // Traverse the whole list,
  // counting all the nodes
  while (currentNode.next) {
    currentNode = currentNode.next;
    listLength += 1;
  }

  // If k is greater than the length of the list, there can't
  // be a kth-to-last node, so we'll return an error!
  if (k > listLength) {
    throw new Error(`k is larger than the length of the linked list: ${k}`);
  }

  // STEP 2: walk to the target node
  // Calculate how far to go, from the head,
  // to get to the kth to last node
  const howFarToGo = listLength - k;

  currentNode = head;
  for (let i = 0; i < howFarToGo; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;
}


function kthToLastNode(k, head) {

  if (k < 1) {
    throw new Error(`Impossible to find less than first to last node: ${k}`);
  }

  let leftNode = head;
  let rightNode = head;

  // Move rightNode to the kth node
  for (let i = 0; i < k - 1; i++) {

    // But along the way, if a rightNode doesn't have a next,
    // then k is greater than the length of the list and there
    // can't be a kth-to-last node! we'll raise an error
    if (!rightNode.next) {
      throw new Error(`k is larger than the length of the linked list: ${k}`);
    }

    rightNode = rightNode.next;
  }

  // Starting with leftNode on the head,
  // move leftNode and rightNode down the list,
  // maintaining a distance of k between them,
  // until rightNode hits the end of the list
  while (rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }

  // Since leftNode is k nodes behind rightNode,
  // leftNode is now the kth to last node!
  return leftNode;
}









// Tests

let desc = 'first to last node';
let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
let actual = kthToLastNode(1, nodes[0]);
let expected = nodes[3];
assertEquals(actual, expected, desc);

desc = 'second to last node';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(2, nodes[0]);
expected = nodes[2];
assertEquals(actual, expected, desc);

desc = 'first node';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
actual = kthToLastNode(4, nodes[0]);
expected = nodes[0];
assertEquals(actual, expected, desc);

desc = 'k greater than linked list length';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
const fifthFromLast = () => (kthToLastNode(5, nodes[0]));
assertThrows(fifthFromLast, desc);

desc = 'k is zero';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
const zeroFromLast = () => (kthToLastNode(0, nodes[0]));
assertThrows(zeroFromLast, desc);

function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrows(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}