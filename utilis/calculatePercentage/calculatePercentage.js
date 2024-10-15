function calculatePercentage(value, total) {
    if (typeof value !== 'number' || isNaN(value) || typeof total !== 'number' || isNaN(total)) {
        throw new Error('Both value and total must be numbers');
    }

    if (total === 0) {
        return 0;
    }

    const percentage = (value * 100) / total;
    return parseFloat(percentage.toFixed(2));
}
module.exports = calculatePercentage;