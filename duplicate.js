let a=[4,3,7,3,5,4,3,5,9,3,2,1],s=[]
//   a.filter(i=>{
//     if(a.includes(i)&&!(s.includes(i)))
//         s.push(i)
// })
// console.log(s)
for(i=0;i<a.length;i++)
{

    if(!s.includes(a[i]))
    {
        s=s+a[i]
    }
  
}
s1=Array.from(s)
console.log(s1)