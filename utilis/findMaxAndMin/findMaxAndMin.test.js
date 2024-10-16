const { findMax, findMin } = require('./findMaxAndMin');

describe("findMax function test", () => {
    test("returns maximum value from the array", () => {
        expect(findMax([1, 3, 5, 2])).toBe(5);
    });
    
    test("handles negative numbers", () => {
        expect(findMax([-3, -1, -5])).toBe(-1);
    });
    
    test("returns null for an empty array", () => {
        expect(findMax([])).toBe(0);
    });
    
    test("works with array of one element", () => {
        expect(findMax([7])).toBe(7);
      });
});

describe("findMin function test", () => {
    test("returns minimum value from the array", () => {
        expect(findMin([1, 3, 5, 2])).toBe(1);
    });
    
    test("handles negative numbers", () => {
        expect(findMin([-3, -1, -5])).toBe(-5);
    });
    
    test("returns null for an empty array", () => {
        expect(findMin([])).toBe(0);
    });
    
    test("works with array of one element", () => {
        expect(findMin([7])).toBe(7);
      });
})

