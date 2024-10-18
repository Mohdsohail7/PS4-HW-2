const calculateAverage = require('./calculateAverage');

test("calculates the average of an array of positive numbers", () => {
    expect(calculateAverage([10, 20, 30, 40])).toBe(25);
  });
  
  test("calculates the average of an array with negative numbers", () => {
    expect(calculateAverage([-10, -20, -30, -40])).toBe(-25);
  });
  
  test("returns 0 for an empty array", () => {
    expect(calculateAverage([])).toBe(0);
  });
  
  test("calculates the average of an array with a single number", () => {
    expect(calculateAverage([42])).toBe(42);
  });
  
  test("calculates the average of mixed positive and negative numbers", () => {
    expect(calculateAverage([10, -10, 20, -20])).toBe(0);
  });
  