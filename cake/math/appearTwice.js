function findRepeat(numbers) {
  if (numbers.length < 2) {
    throw new Error('Finding duplicate requires at least two numbers');
  }

  const n = numbers.length - 1;
  const sumWithoutDuplicate = (n * n + n) / 2;
  const actualSum = numbers.reduce((acc, cur) => acc +  cur, 0);

  return actualSum - sumWithoutDuplicate;
}







// Tests

let desc = 'short array';
let actual = findRepeat([1, 2, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([4, 1, 3, 4, 2]);
expected = 4;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4]);
expected = 2;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}

//test test