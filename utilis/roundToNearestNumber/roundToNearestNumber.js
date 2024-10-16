function roundToNearest(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error('Input must be a number');
    }
    return Math.round(num);
}
module.exports = roundToNearest;