// resolve(val) or reject(error)
let p1=new Promise(function(resolve,reject)//inbuilt in js engine 
{
    console.log('Promise is pending')
    setTimeout(function()
    {
        console.log("I am a promise and i am fulfilled")
        resolve(true)//finally resolve hone pe true ayega
    },4000)

})
console.log(p1)// u can track ur  promise here 

// >>>>>>>>>> OUTPUT BEFORE 4 SEC

//Promise is pending

// Promise {<pending>}
//[[Prototype]]: Promise
//[[PromiseState]]: "pending"
//[[PromiseResult]]: undefined

// I am a promise and i am fulfilled

// >>>>>>>>>>>> OUTPUT AFTER 4 SEC

//Promise is pending

//Promise {<pending>}
//[[Prototype]]: Promise
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: true

//I am a promise and i am fulfilled



//   .............. what if u reject the promise ? instead of resolve
let p2=new Promise(function(resolve,reject)
{
    console.log('Promise is pending')
    setTimeout(function()
    {
        console.log("I am a promise and i am rejected")
        reject(new Error("Its an error"))
    },4000)

})
console.log(p2)



//  p1 takes 4 sec and p2 takes 4 sec taking totally 8 sec but NO it will be done parallelly in alltogether 4 sec only 
//Both p1 and p2 executed simultaneously  ie;
//console.log(p1,p2)


// then and catch used mostly in network calls becoz in that either u will get data aur not get data
//.then
//hojane par if u r only interesetd in fulfillment 
p1.then((val)=>//p1 hothe hi yha se ye print hoga phir hi p2 ppe jayega
{
    console.log('Then ke andhar vala'+val)//here val is true 
})

// .then takes 2 parameters ie; funcn(result) and funcn(error) to handle error if in case error occured 
p1.then((value)=>
{
     console.log(value + 'me yha ka val hu')
},(error)=>
{
     console.log(error + " me yha ka error hu")
})





//.catch
//how to catch error and handle the error .......... u can use .catch or .then 

//using catch
p2.catch((error)=>
{
   console.log('Some error occured')

})

//using then
p2.then(null,error=>
    {
        console.log('Some error occured')
    })











