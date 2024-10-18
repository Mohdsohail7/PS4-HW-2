const generateRandomNumber = require('./randomGenerateNumber');

test("generates a random number between the range", () => {
    const num = generateRandomNumber(1,10);
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(10);
});

test("works for negative ranges", () => {
    const num = generateRandomNumber(-10,-1);
    expect(num).toBeGreaterThanOrEqual(-10);
    expect(num).toBeLessThanOrEqual(-1);
});

test("returns the same number when min equals max", () => {
    expect(generateRandomNumber(5,5)).toBe(5);
});

test("generates an integer", () => {
    const num = generateRandomNumber(1,10);
    expect(Number.isInteger(num)).toBe(true);
});
