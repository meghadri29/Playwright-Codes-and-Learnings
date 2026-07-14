//==========
//Topic : Number Literals
//==========

/*

In JavaScript, numbers are always of type "number"(except BigInt).
There is no separate int,float, double etc.
JS uses IEE 754 double precision 64 bit binary format.

*/

//=====
// 1. Int Literals
//=====

//Decimal(Base 10) most common
let decimal = 100;
console.log("Decimal:", decimal); //100

//Binary(Base 2)- Starts with 0b or 0B
let binary = 0b1010; //10 in decimal
console.log("Binary:0b1010", binary);//10

//Octal(Base 8) - Starts with 0o or 0O
let octal = 0o62; //50 in decimal
console.log("Octal:0o62",octal); //50

//Hexadecimal(Base 16) - Starts with 0x or 0X
let hexadecimal = 0x5A;
console.log("Hexadecimal:0x5A",hexadecimal);

// Floating Point Literals
let x=10;
console.log(x);

//===
// 2. Floating Point Literals.
//===

let float1=3.14;
let float2=-0.5;
let float3=.5; //valid but avoid for readability.
let float4=5.; //valid but avoid for readability.
console.log("Float 3.14:", float1);
console.log("Float -0.5:",float2);
console.log("Float .5",float3);
console.log("Float2 5.",float4);

// Exponential Notion
let exp1=1.5e3; //1.5 * 10^3=1500
let exp2=1.5e-3; //1.5 * 10^-3=0.0015
let exp3=2E10; //2 * 10^10=20000000000
console.log("Exponential 1.5e3:", exp1); //1500
console.log("Exponential 1.5e-3:", exp2); //0.0015
console.log("Exponential 2E10:", exp3); //20000000000

//===
// 3. Numeric Separtors (ES2021+)
//===

let million=1_000_000;
let binarySep=0b1010_0001;
let hexSep=0xFF_FF;
console.log("Separator 1_000_000:",million);//1000000
console.log("Separator 0b1010_0001:",binarySep);//161
console.log("Separator 0xFF_FF:",hexSep);//65535

//===
// 3. BIGINT - For arbitrary large integers

let big =123456789012345678901234567890n;
let big2=BigInt("123456789012345678901234567890");
let bigFromNum=BigInt(42);
console.log("BigInt Literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:",bigFromNum);
console.log("typeof BigInt:", typeof big); //"bigint"





