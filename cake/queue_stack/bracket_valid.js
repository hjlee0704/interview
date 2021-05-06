function isValid(code) {

  const openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const openers = new Set(['(', '[', '{']);
  const closers = new Set([')', ']', '}']);

  const openersStack = [];

  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);

    if (openers.has(char)) {
      openersStack.push(char);
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false;
      }
      const lastUnclosedOpener = openersStack.pop();

      // If this closer doesn't correspond to the most recently
      // seen unclosed opener, short-circuit, returning false
      if (openersToClosers[lastUnclosedOpener] !== char) {
        return false;
      }
    }
  }
  return openersStack.length === 0;
}






// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}