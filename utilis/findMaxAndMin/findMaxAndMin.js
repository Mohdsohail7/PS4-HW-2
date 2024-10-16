function findMax(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

function findMin(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}

module.exports = { findMax,  findMin };

