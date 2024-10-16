function sumOfDigits(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error("Input must be a number");
    }

    if (!Number.isInteger(num)) {
        throw new Error("Input must be an integer");
    }
    num = Math.abs(num);

    let sum = 0;
    while(num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
module.exports = sumOfDigits;