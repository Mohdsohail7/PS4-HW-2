const convertCelsiusToFahrenheit = require('./convertCelsiusToFahrenheit');

test("converts 0°C to 32°F", () => {
    expect(convertCelsiusToFahrenheit(0)).toBe(32);
  });

  test("converts 100°C to 212°F", () => {
    expect(convertCelsiusToFahrenheit(100)).toBe(212);
  });

  test("converts -40°C to -40°F (special case)", () => {
    expect(convertCelsiusToFahrenheit(-40)).toBe(-40);
  });

  test("converts 37°C to 98.6°F (normal body temperature)", () => {
    expect(convertCelsiusToFahrenheit(37)).toBeCloseTo(98.6, 1);
  });
  
  test("converts 25°C to 77°F", () => {
    expect(convertCelsiusToFahrenheit(25)).toBe(77);
  });
  