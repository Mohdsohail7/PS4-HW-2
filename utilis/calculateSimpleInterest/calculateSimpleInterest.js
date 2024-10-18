function calculateSimpleInterest(principal, rate, time) {
    if (typeof principal !== 'number' || typeof rate !== 'number' || typeof time !== 'number') {
        throw new Error("All the values must be a number");
    }

    let interest = (principal * rate * time) / 100;

    return interest;
}
module.exports = calculateSimpleInterest;