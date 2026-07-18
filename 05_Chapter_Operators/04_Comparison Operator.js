//Comparison Operator in JavaScript(Will always result in boolean, true or false)
// =,===, ==, !=, !==, >, <, >=, <=

// = -> Assignment operator
// == -> Comparison operator(Loose comparison operator)
// === -> Strict comparison operator

// == loose comparison operator
/*
=== Strict comparison operator. We will use this operator
in our code. It checks both value and type of the variable. 
It is recommended to use this operator in your code. 
 */

// console.log(3>4); // false
// console.log(3<4); // true
// console.log(3>=4); // false (4 > 4 or 4 == 4, or gate)

console.log(5 == "5"); // true.loose couple comparison operator, true. Either Value or Data Type.
console.log(5 === "5"); // false. strict comparison operator, false. Checks both Value and Data Type.
// 5 is number and "5" is string. So, it is false.

// === Strict check we will check for both the datatype and value.
// == Loose check we will use either datatype or value.
console.log(4 == '4');
// console.log(5 != "5"); False.loose data type or value.
// console.log(5 !=="5"); True.
// console.log(5 !=== "5"); This does not exist.

// In the above example != is lose and !== is strict as !=== does not exist.

