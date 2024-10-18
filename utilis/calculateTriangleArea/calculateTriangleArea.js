function calculateTriangleArea(base, height) {
    if (typeof base !== 'number' || typeof height !== 'number') {
        throw new Error("Both must be a number");
    }

    let Area = (base * height) / 2;
    return Area;
}
module.exports = calculateTriangleArea;