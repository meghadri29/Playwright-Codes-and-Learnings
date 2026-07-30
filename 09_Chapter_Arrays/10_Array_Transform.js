let scores=[45,82,91,60,73];
let grades=scores.map(s=>s>70?'Pass':'Fail');
console.log(grades);

// Map is generally used when we want to transoform the array into a new array with the same size.

// Filter

let scores=[45,82,91,60,73];
let passmarks=scores.filter(s=>s>=70);
console.log(passmarks);

//Reduce
let scores=[45,82,91,60,73];
let total=scores.reduce((sum,s)=>sum+s,0);
console.log(total);

// Reduce is very rarely used. Instead we can write the below program.
let scores=[45,82,91,60,73];
let sum=0;
for(let i=0;i<scores.length;i++){
    sum=sum+scores[i];
}
console.log(sum);

//Sorting
let fruits=['Mango','Papaya','pomegranate','Apple','Banana'];
let sortedfruits=fruits.sort();
console.log(sortedfruits);



