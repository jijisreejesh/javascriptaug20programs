let prompt=require('prompt-sync')()
let a=prompt("Enter numbers seperated by coma  : ")
b=a.split(',').map(Number)
// b=Array.from(a);
// a=[3,4,9,,342,6,1]
let large=0
let d=b.forEach((i)=>{

    if(large<i)
        large=i
   
})
console.log(b)
console.log("largest : "+large)