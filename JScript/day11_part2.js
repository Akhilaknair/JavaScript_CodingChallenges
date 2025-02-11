
let a= ()=>
{
    return new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
            resolve(456);
    },1000)

})

}


// ERROR
// let b=await a ;
// let c=await a ;
// let d=await a ;

// console.log(b,c,d)

//await is only valid in async functions and the top level bodies of modules
// Hence put them in a function 
/// like this

//// ---------------- type 1 
// let funcn = async ()=>
// {
//  let b=await a ;
//  let c=await a ;
//  let d=await a ;
//  console.log(b,c,d)
// }
// funcn()   // 456 456 456




//--------------type 2 
// let funcn = async ()=>
// {
//  let b=await a(); 
//  console.log(b)

//  let c=await a() ;
//  console.log(c)

//  let d=await a() ;
//  console.log(d)
// }

// funcn()

/////// OUTPUT 
// 456
// 456
// 456




///// here u can do IIFE instead of calling funcn() at end 
(async ()=>
{
 let b=await a(); 
 console.log(b)

 let c=await a() ;
 console.log(c)

 let d=await a() ;
 console.log(d)
}
) ()
// this funcn will itself become an entity and will be executed
// it prevents the global name - space polluttion 
// once iife is executed all the spaces allotted for variables will be released
// hence if u try to print d , it will give u error 
console.log(d)// error
// if this funcn was not async then it will not be an error to print d .
