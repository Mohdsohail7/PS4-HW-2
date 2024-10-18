function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;
    let Average;
    for (let i = 0;  i < arr.length; i++) {
        sum += arr[i];
    }
    Average = sum / arr.length;
    return Average;
}
module.exports = calculateAverage;