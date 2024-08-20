//Count the number of occurences of a specific element
let prompt=require("prompt-sync")()
let a=prompt("Enter the numbers seperated by coma : "),c=0
let b=prompt("Enter an element to check :")
a=a.split(',').map(Number)
for(i=0;i<a.length;i++)
{
    if(a[i]==b)
    {
        c++;
    }
}
if(c==0)
{
    console.log("Element not found")
}
else
{
    console.log("Element found\nNumber of times : "+c);
}
