function isOddOrEven(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error('Input must be a number');
    }

    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
module.exports = isOddOrEven;