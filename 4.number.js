

// Number Properties

const s = "1.234ww";
console.log(s);// String
console.log(Number(s)); // conversion of string to number

console.log(Number.isInteger(s));// find the integer value

console.log(Number.parseFloat(s).toFixed(2));// convet float value

console.log(Number.parseInt(s).toFixed(2));// convert integer value 
// while using tofixed number converted to string

console.log(Number.isNaN(s)); // used to find not a number
console.log(isNaN(s)); 
