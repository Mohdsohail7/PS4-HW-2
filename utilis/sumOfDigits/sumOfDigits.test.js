const sumOfDigits = require('./sumOfDigits');

test("sums digits of a positive number", () => {
    expect(sumOfDigits(123)).toBe(6);
});

test("sums digits of a with negative number", () => {
    expect(sumOfDigits(-123)).toBe(6);
});

test("returns 0 if input is 0", () => {
    expect(sumOfDigits(0)).toBe(0);
});

test("handles single-digit number", () => {
    expect(sumOfDigits(7)).toBe(7);
});

test("throws error if input is not an integer", () => {
    expect(() => sumOfDigits(123.45)).toThrow('Input must be an integer')
});

test("throws error if input is string", () => {
    expect(() => sumOfDigits('sohail')).toThrow('Input must be a number')
});