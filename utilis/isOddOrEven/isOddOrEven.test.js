const isOddOrEven = require('./isOddOrEven');

test("returns 'even' for even numbers", () => {
    expect(isOddOrEven(2)).toBe('even');
});

test("returns 'odd' for odd numbers", () => {
    expect(isOddOrEven(3)).toBe('odd');
});

test("handles negative even numbers", () => {
    expect(isOddOrEven(-4)).toBe('even');
});

test("handles negative odd numbers", () => {
    expect(isOddOrEven(-5)).toBe('odd');
});

test("throws an error if input is not a number", () => {
    expect(() => isOddOrEven('sohail')).toThrow('Input must be a number');
});

test("works with zero (even)", () => {
    expect(isOddOrEven(0)).toBe('even');
});