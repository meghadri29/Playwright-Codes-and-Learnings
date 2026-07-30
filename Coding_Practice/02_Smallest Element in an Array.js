let arr=[10,15,23,8,67,78];
let minArr=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<minArr)
    {
       minArr=arr[i];
    }
}
console.log(minArr);