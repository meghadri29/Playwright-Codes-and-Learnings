let tests = ["login", "checkout", "search"];
for (let i = 0; i < tests.length; i++) //80% of time we will use this only.
{
    console.log(i, tests[i]);
}
console.log("----");

// for...of (cleanest for values) 
for (let test of tests) {    // 20% of time we will use this.
    console.log(test) // value
}
console.log("----");

// forEach (no return value)
tests.forEach((test, index) => {   //This needs to be remembered, as we will be using it quite often in automation.

    console.log(`${index}: ${test}`);
});

// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("----");


let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}