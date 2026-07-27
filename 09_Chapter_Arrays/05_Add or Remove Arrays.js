let arr=[1,2,3];
console.log(arr);

//Add to END
arr.push(4);
console.log(arr);

//Remove from END
arr.pop();
console.log(arr);

arr.push(5,6);
console.log(arr);

//Add to BEGINING.
arr.unshift(0);
console.log(arr);

//Remove from BEGINING.
arr.shift();
console.log(arr);

//[ 1, 2, 3, 5, 6 ]

arr.splice(1,0,99);//(start index,no of elements to be deleted, updated elements)
console.log(arr);//[ 1, 99, 2, 3, 5, 6 ]

arr.splice(1,1);
console.log(arr);//[ 1, 2, 3, 5, 6 ]


