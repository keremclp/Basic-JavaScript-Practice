// we should defined kelvin with const variable becasuse kelvin is a constant term
const kelvin = 0;
//convert Kelvin to Celsius by subtracting 273 from the kelvin variable
const celcius = kelvin - 273; 
// to find fahrenheit
let fahrenheit = celcius*(9/5) + 32;
let newton = celcius*(33/100);
// convert fahrenheit from decimal number to integer
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton`)
