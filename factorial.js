//factorial
let prompt=require("prompt-sync")()
let a=prompt("Enter the number: ")
let s=1
for(i=2;i<=a;i++)
{
    s=s*i;
}
console.log("Factorial : ",s)
