function generateRandomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error("Both min and max must be numbers");
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error("Both min and max must be an Integer");
    }

    if (min > max) {
        throw new Error("min less than or equal to max");
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = generateRandomNumber;