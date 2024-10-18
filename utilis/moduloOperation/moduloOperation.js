function moduloOperation(dividend, divisor) {
    if (typeof dividend !== 'number' || typeof divisor !== 'number') {
        throw new Error("Both dividend and divisor must be a numbers");
    }

    if (divisor === 0) {
        throw new Error("divisor cannot be zero");
    }

    let remainder = dividend % divisor;
    return remainder;
}
module.exports = moduloOperation;