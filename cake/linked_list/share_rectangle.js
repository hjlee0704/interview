function findRangeOverlap(point1, length1, point2, length2) {

  // Find the highest start point and lowest end point.
  // The highest ("rightmost" or "upmost") start point is
  // the start point of the overlap.
  // The lowest end point is the end point of the overlap.
  const highestStartPoint = Math.max(point1, point2);
  const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  // Return null overlap if there is no overlap
  if (highestStartPoint >= lowestEndPoint) {
    return { startPoint: null, overlapLength: null };
  }

  // Compute the overlap length
  const overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength: overlapLength };
}

function findRectangularOverlap(rect1, rect2) {

  // Get the x and y overlap points and lengths
  const xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  // Return null rectangle if there is no overlap
  if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  }

  return {
    leftX: xOverlap.startPoint,
    bottomY: yOverlap.startPoint,
    width: xOverlap.overlapLength,
    height: yOverlap.overlapLength,
  };
}








// Tests

let desc = 'overlap along both axes';
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'one rectangle inside another';
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'both rectangles the same';
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = 'touch on horizontal edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch on vertical edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch at a corner';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'no overlap';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a, Object.keys(a).sort());
  const objectB = JSON.stringify(b, Object.keys(b).sort());
  if (objectA !== objectB) {
    console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}