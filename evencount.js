//even numbers in array
let prompt=require("prompt-sync")()
let a=prompt("Enter the numbers seperated by coma : "),c=0
a=a.split(',').map(Number)
for(i=0;i<a.length;i++)
{
    if(a[i]%2==0)
        c++;
}
console.log("Number of Even numbers : ",c);