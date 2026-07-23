
/*

if (condition) 
{
    // runs if condition is true
} 
    else if (anotherCondition) 
{
    // runs if anotherCondition is true
} 
else 
{
    // runs if ALL conditions are false
}

*/
let age = 27;
if (age > 18) {
    console.log("GOA");
    if (age > 26) {
        console.log("DRINK!");
    }
    else {
        console.log("You CAN'T DRINK!");
    }
} else {
    console.log("No GOA");
}

let score = 78;

if (score >= 90) {
    console.log("Grade: A — Excellent");
}
else if (score >= 80 && score < 90) {
    console.log("Grade: B — Good");
}
else if (score >= 70 && score < 80) {
    console.log("Grade: C — Can do better");
}
else if (score >= 60 && score < 70) {
    console.log("Grade: D — Needs Improvement");
}
else if (score >= 50 && score < 60) {
    console.log("Grade: E : Bring Paranets");
} else {
    console.log("You can sell momos, pizza!")
}




// const data = require('fs').readFileSync(0, 'utf8');


// const str = data.split('\n')[0];
// Write your solution here

// let string="Meghadri will go";
// let separator=string.split("");
// console.log(separator);

// let data = 'abba'
// let reversedStr = data.split('').reverse().join('');
// if (data === reversedStr) 
// {
//     console.log("YES");
// }
// else 
// {
//     console.log("NO");
// }



