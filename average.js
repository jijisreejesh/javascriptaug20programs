//Average of numbers
let prompt=require("prompt-sync")()
let a=prompt("Enter the numbers seperated by coma : "),c=0
a=a.split(',').map(Number)
for(i=0;i<a.length;i++)
{
    c=c+a[i]
}
let avg=c/a.length
console.log("Average : ",avg)
