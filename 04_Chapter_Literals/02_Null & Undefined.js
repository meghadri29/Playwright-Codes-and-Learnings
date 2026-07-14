//Topic: Null vs Undefined in Javascript

/*
Simple Definitions

Undefined: A variable that has been declared 
but has not yet been assigned a value.

Null: A variable exists but the developer
has explicitly assigned it a null value.It is intentionally empty.
*/

let x='';
console.log(x);

var iphone=null;
console.log(iphone);
//

// 1. Undefined

// 


let userName;
console.log(userName); //undefined
console.log(typeof userName); //undefined
function greet() {}
console.log(greet()); //undefined

// 

// 2.null

// 

let profilePicture=null;
console.log(profilePicture); //null
console.log(typeof profilePicture); //object

// 
// 3. Key Differences between null and undefined
// 

/*

Features	  Undefined	                   Null
Meaning       Not Assigned Yet         Intentionally Empty
Who Sets it?  Javascript Automatically Developer Manually
              sets it.
Type          Undefined                Object
==Comparison  | null==undefined -->true |
===Comparison |null===undefined -->false|
*/