//inversion of control :: when the main funcn call is executed to that we passed the entire function itself (means a function isn passed to another funcn s a whole) 


//fucn description
function loadmyscript(mysrc,CALLBACK)//callback is funcn hello thats been passed in above lines 
{
     //script bnao aur body m append kro
   var myscript=  document.createElement("script")
   myscript.src=mysrc

   myscript.onload=function()
   {
     console.log('Bhai Loaded') //jab script load hogi tho console me likke ayega 
     CALLBACK(null,mysrc)//aur uss passed funcn kko yha invoke kro :) WITH PASSED ARGUMENT
   }
   document.body.appendChild(myscript)

}

// funcn to be sent inside big funcn
function gudmg(error,mysrc)
{
    //note that callback is another name given to passed funcn ie ; gudmg()
   if(error)//if error is there then only yani call back m null ke jgh true aya tho 
   {
    console.log(error)
    sendEmergencymsgToCEO()
   }
    alert('Gud mrng girls' + mysrc)
}


//if by mistake in callback funcn instead of null if u pass true then if(error) is true and code inside will be executed to call CEO FUNCN  


//main fn call no change
loadmyscript('......',gudmg)//hello funcn name is passed 










/////   PART 2 

//     WHEN U HAVE MANY CALLBACKS 
/////   PYRAMID OF DOM   OR  CALLBACK HELL 
//pyramid of dom grows horizontally making it hard to read ESP WHEN WE HAVE ASYNCHRONOUS ACTIONS 

// after loading one script if there is no error then load another sctipt then load another and so on ........
// but here no one is keeping tack that which script is been loaded currently 
// callbacks inside callbacks 




loadmyscript('......',function gudmg(error,mysrc)
{
   if(error)//if error is there then only yani call back m null ke jgh true aya tho 
   {
    console.log(error)
    sendEmergencymsgToCEO()
   }
    //alert('Gud mrng girls' + mysrc)
    //instead of giving alert call another script using loadmyScript() making it a nested calls 

    loadmyscript('......',function gudmg(error,mysrc)
    {
       if(error)//if error is there then only yani call back m null ke jgh true aya tho 
       {
        console.log(error)
        sendEmergencymsgToCEO()
       }
        alert('Gud mrng girls🌺' + mysrc)
    })

})

//  >>>>>>>>>>>> PROMISES 
//PROMIES USED FOR PARALLEL EXECUTION of asynchronous tasks and to organise things 
// ex of parallel execution ::

//fetch google.com
//fetch data
//fetch pictures
//print downloading
// first 3 works can be done parallelly

// u can also amke custom promises 
///  SOLUTION OF THe PROBLEM of callback IS  ::  PROMISES 
// fulfill zroor hoga that will be either resolved or rejected
// PROMISE is a promise of code execution
// code will either be executed or fails in both cases the subscriber will be notified 

// js engine provides u both the callback ie; resolve and reject 
let promise=new Promise(function(resolve,reject)
{
      alert('I am an alert in promise ')
      resolve(37)
})
console.log(promise)

//output ::: 
// Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 37

// the promise obj returned consists of state and resultsn properties
// state is initially pending ...its either rejected or fulfilled
// fulfillment can be of 2 types yatho reject (error)ya resolve(value returned)
// to fulfill u have to call resolve() with some value or true boolean
// The work inside promise syntax runs in the background  and gets u notifies with .then and .catch





































