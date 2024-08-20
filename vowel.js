let prompt=require("prompt-sync")()
let a=prompt("Enter a string : ")
let c=0;
a=a.toLowerCase()
for(let i=0;i<a.length;i++)
{
    if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u')
    {
        c++;
    }
}
console.log("Count of Vowels : "+c)