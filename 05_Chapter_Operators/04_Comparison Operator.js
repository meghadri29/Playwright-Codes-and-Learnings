//Comparison Operator in JavaScript
// ===, ==, !=, !==, >, <, >=, <=

// = -> Assignment operator
// == -> Comparison operator(Loose comparison operator)
// === -> Strict comparison operator

// == loose comparison operator
// 
/*
=== Strict comparison operator. We will use this operator
in our code. It checks both value and type of the variable. 
It is recommended to use this operator in your code. 
 */

// console.log(3>4); // false
// console.log(3<4); // true
// console.log(3>=4); // false (4 > 4 or 4 == 4, or gate)

console.log(5 == "5"); // loose couple comparison operator, true.
console.log(5 === "5"); // strict comparison operator, false. 
// 5 is number and "5" is string. So, it is false.

// === Strict check we will check for both the datatype and value.
// == Loose check we will use either datatype or value.