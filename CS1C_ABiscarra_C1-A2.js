// C1-A2: Mathematical and Comparison Operations, and Type Conversions
// 1. Develop a program initializing 4 variables (a, b, c, d) and 1 constant (e), store the following values:
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;
// 2. a. Display the sum of the declared variables (a, b, c, d) and constant (e) combined.
let sum = a + b + c + parseInt(d) + e; //Added parseInt to convert string 'd' to a number for addition.
console.log("Sum of a, b, c, d, and e:", sum);

// b. Compare the values of variable d and constant e using relational operators [>, <, >=, <=, and ===], then display the results.;
console.log("d > e:", d > e); //parseInt converts d to a number for comparison.
console.log("d < e:", d < e);
console.log("d >= e:", d >= e);
console.log("d <= e:", d <= e);
console.log("d === e:", d === e);

// c. Declare new variables to store the results of the following operations, then after, display the results:

// 1. Subtract all the values of the declared variables.
let subtractionResult = a - b - c - d;
console.log("Result of subtracting all variables:", subtractionResult);

// 2. Multiply the values of variable a and c, divided by constant e.
let result = (a * c) / e;
console.log("Result of multiplying a and c, then dividing by e:", result);

// 3. Display the exponent value of constant e raised to the power of variable c.
let exponentResult = e**c;
console.log("Result of e raised to the power of c:", exponentResult);

// 4. Reassign the value of c (12) to constant e
let newE = c; 
console.log("Result of reassigning c to e:", newE);
