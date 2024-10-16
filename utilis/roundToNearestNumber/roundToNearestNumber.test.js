const roundToNearest = require('./roundToNearestNumber');

test("rounds 2.5 to 3", () => {
    expect(roundToNearest(2.5)).toBe(3);
});

test("rounds -2.5 to -2", () => {
    expect(roundToNearest(-2.5)).toBe(-2);
});

test("rounds 3.3 to 3", () => {
    expect(roundToNearest(3.3)).toBe(3);
});

test("rounds -3.8 to -4", () => {
    expect(roundToNearest(-3.8)).toBe(-4);
});

test("returns the same integer if no rounding needed", () => {
    expect(roundToNearest(4)).toBe(4);
});

test("throws error if input is not a number", () => {
    expect(() => roundToNearest('sohail')).toThrow('Input must be a number');
});