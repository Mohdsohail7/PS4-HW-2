const moduloOperation = require('./moduloOperation');

test("returns the remainder of division", () => {
    expect(moduloOperation(10,3)).toBe(1);
});

test("handles negative dividends", () => {
    expect(moduloOperation(-10,3)).toBe(-1);
});

test("handles negative divisors", () => {
    expect(moduloOperation(10,-3)).toBe(1);
});

test("returns 0 when dividend is divisible by divisor", () => {
    expect(moduloOperation(10,5)).toBe(0);
});

test("handles division by 1", () => {
    expect(moduloOperation(10,1)).toBe(0);
});

