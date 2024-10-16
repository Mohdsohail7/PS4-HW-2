const isInRange = require('./isInRange');

test('returns true if number is within the range', () => {
  expect(isInRange(5, 1, 10)).toBe(true);
});

test('returns false if number is below the range', () => {
  expect(isInRange(-5, 0, 10)).toBe(false);
});

test('returns false if number is above the range', () => {
  expect(isInRange(15, 1, 10)).toBe(false);
});

test('returns true if number is exactly the minimum', () => {
  expect(isInRange(1, 1, 10)).toBe(true);
});

test('returns true if number is exactly the maximum', () => {
  expect(isInRange(10, 1, 10)).toBe(true);
});
