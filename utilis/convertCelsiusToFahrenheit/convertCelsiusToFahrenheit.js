function convertCelsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        throw new Error("Celsius must be a number");
    }

    let Fahrenheit = celsius * (9/5) + 32;
    return Fahrenheit;
}
module.exports = convertCelsiusToFahrenheit;