// Prefix Increment
let a = 5;
let b = ++a; 
console.log(a); // 6 (variable was changed)
console.log(b); // 6 (returns the updated value)

// Postfix Increment
let x = 5;
let y = x++; 
console.log(x); // 6 (variable was changed)
console.log(y); // 5 (returns the original value before adding 1)

// ERT(Expression Results Table) (Prefix Ex:1) 
//              E(b)                      R(a)                         
// 1.           NA                        5                                           
// 2.           6                         NA
// 3.           NA                        6
// 4.           6                         NA
// Remember one thing a++ or ++a increment of 'a' will happen,
// but what returns after increment that depends on pre or post increment.
// ERT(Expression Results Table) (Postfix Ex:2) 
//              E(y)                      R(x)                         
// 1.           NA                        5                                           
// 2.           5                         NA
// 3.           NA                        6
// 4.           5                         NA

// Advance Increment and Decrement exercises. Very Important.

let a1=10;
console.log(++a1+a1);//This returns 22.
console.log(a1);//This resturns 11.

let a2=10;
console.log(++a2+a2+a2++);// This returns 33.
console.log(a2);//This returns 12.

let i=1;
let result=i++ + ++i;//This returns 4.
console.log(result, i);//This returns 3.

let a3=10;
console.log(++a3 + ++a3);//This returns 23.
console.log(a3);//This returns 12.

let c=10;
result=c++;
console.log(result);//This returns 10.
console.log(c);//This returns 11