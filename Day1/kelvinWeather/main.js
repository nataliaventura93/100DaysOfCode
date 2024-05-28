// As today's forecast is 293 kelvin, store this data in a constant 
const kelvin = 293 

// Celsius is 273 degrees less than Kelvin, so we need to subtract it from the kelvin
const celsius = kelvin - 273

// This equation calculates the farenheit as a function of the celsius. 
let fahrenheit = celsius * (9/5) + 32

// We use the .floor() method to round down the temperature in degrees Fahrenheit and store the result in the variable fahrenheit.
fahrenheit = Math.floor(fahrenheit)

// we convert Celsius to newton and round it down with the .floor() method.
let newton = Math.floor(celsius * (33/100))

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
console.log(`The temperature is ${newton} degrees Newton`)