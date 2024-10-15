const calculatePercentage = require('./calculatePercentage');

test("calculates correct percentage for valid numbers", () => {
    expect(calculatePercentage(50,100)).toBe(50.0);
});

test("returns 0 when total is 0", () => {
    expect(calculatePercentage(50,0)).toBe(0);
});

test("rounds the percentage to two decimal places", () => {
    expect(calculatePercentage(22,47)).toBe(46.81);
});

test("handles case where value is 0", () => {
    expect(calculatePercentage(0, 100)).toBe(0);
});

test("throws an error if value is not a number", () => {
    expect(() => calculatePercentage('sohail',100)).toThrow('Both value and total must be numbers')
});

test("throws an error if total is not a number", () => {
    expect(() => calculatePercentage(50,'sohail')).toThrow('Both value and total must be numbers')
});

test("works when both value and total are negative", () => {
    expect(calculatePercentage(-50,-100)).toBe(50.0);
});

test("works when value is negative", () => {
    expect(calculatePercentage(-50,100)).toBe(-50.0);
});

test("works when total is negative", () => {
    expect(calculatePercentage(50,-100)).toBe(-50.0);
});