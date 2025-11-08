// nomor 3
function celciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log("\n=== Nomor 3 ===");
console.log(`Celcius to Fahrenheit: 25°C = ${celciusToFahrenheit(25)}°F`);
console.log(`Fahrenheit to Celcius: 77°F = ${fahrenheitToCelcius(77)}°C`);