// The JavaScript nullish coalescing operator (??) is a logical operator that returns its right-hand operand when its left-hand operand is null or undefined. 
let amul=null;
let val=amul ?? "Nandini Milk";
console.log(val);

let api_response=null;
let responsedata= api_response ?? "{}";
console.log(responsedata);


let api_response1="Priyam";
let responsedata1= api_response1 ?? "{}";
console.log(responsedata1);


