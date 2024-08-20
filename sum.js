//Sum of elements
let prompt=require("prompt-sync")()
let a=prompt("Enter the numbers seperated by coma : "),s=0
a=a.split(',').map(Number)
for(i=0;i<a.length;i++)
{
  s=s+a[i]
}
console.log("Sum : "+s)