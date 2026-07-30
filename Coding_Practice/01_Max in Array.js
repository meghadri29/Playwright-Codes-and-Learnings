let arr=[10,15,23,8,67,78];
let maxArr=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>maxArr)
    {
       maxArr=arr[i]; 
    }
}
console.log(maxArr);