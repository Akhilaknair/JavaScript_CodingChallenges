//Error handling 
//usually prgm halts when error occurs so we can handle this by try and catch method
try {
    console.log(rahul)
}
catch (error) {
    console.log(" Balle balle ")
}


//note that inside try block only synchronous code will be handled but not the scheduled code 
// if exception comes in try block as an scheduled code then try catch will not handle it 
// it will give error

try {
    setTimeout(() => {
        console.log(rahul)
    }, 100)
}
catch (error) {
    console.log(" Balle balle ")
}

// but if u write try catch inside the sceduled code then it will work
// then it will not give error
try {
    setTimeout(() => {

        try {
            console.log(rahul)
        }
        catch (err) {
            console.log(err)
        }

    }, 100)
}
catch (error) {
    console.log(" Balle balle ")
}




// 3  properties of error 
// name , message , stack(rarely used )
// name yani reference error h ya syntax error

try {
    console.log(rahul)
}
catch (error) {
    console.log(error.name)//refernce error
    console.log(error.message)
}


//--------------------------
// custom errors creation

// type1 error throw
try {
    throw new Error(" Diary Milk ")
}
catch (error) {
    console.log(error.name)//error
    console.log(error.message)//diarymilk
}

//type2 error throw
try {
    throw new ReferenceError(" Milky Bar ")
}
catch (err) {
    console.log(err.name)//refernce error
    console.log(err.message)//MilkyBar
}

// example :: 
try {
    let age = prompt('Enter your age :: ')
    age = Number.parseInt(age)
    if (age > 150) {
        throw new Error("This is probabLY not true")
    }
}
catch (err) {
    console.log(err.name)//refernce error
    console.log(err.message)//MilkyBar
}

//ex of try catch 
try {
    let age = prompt('Enter your age :: ')
    age = Number.parseInt(age)
    if (age > 150) {
        throw new SyntaxError("This is probably not true")
    }
}
catch (err) {
    console.log(err.name)//Syntaxerror
    console.log(err.message)//This is probably not true 
}

/// >>>>>>>>>>>> Finally Clause 
// Finally tho hmesha chlega even if error ho ya successful ho :) 

//its always necessary to do finally after try and catch

try {
    // console.log(rahul)
    let a = 0
    console.log('Run Successfully')
}
catch (error) {
    console.log(" Error he yar kuch kro ")
}
finally {
    console.log('I am a good boy :) ')
}

//BUT what if u do error in catch also then again ur prgm will halt :(
//In that case further vala codes  nhi chlega ..............
//kyoki try vala error catch block handle kr rha tha par catch m hi error hone se halt hogya prgm


try {
    let a = 0
    console.log('Run Successfully')
}
catch (error) {
    console.log(" Error he yar kuch kro ")
    console.log(anaswara)//here catch m bhi error hogya :(
}

console.log('I am a good boy :) ')//this line will not be executed




// but if u write the same in finally then aapka Finally code tho zroor chlega hi chlega even if u get error in try or error in catch in both cases finally will always be executed ::  mostly used for clean ups 
try {
    console.log(rahul)//error h yha
}
catch (error) {
    console.log(" Error he yar kuch kro ")
    console.log(programe)//error he yha
}
finally {
    console.log('Me tho zroor chlunga  :) ') //this will sutrely run
    //close the file
    //exit the loop
    // write to the log file
}





//Note that even if u put return statement in between then too ur code inside finally will surely run
const f = () => {
    try {
        let a = 0
        console.log('Run Successfully')
        return
    }
    catch (error) {
        console.log(" Error he yar kuch kro ")
    }
    finally {
        console.log('But baby i will surely be run 🐨 :) ')//this line will be printed  after return then only it will move its control to  the further outer codes
    }
}


f()//funcn call  



////// practice qns ::


 async function loadmyscript(mysrc)//callback is funcn hello thats been passed in above lines 
{
     //script bnao aur body m append kro aur promise bnake wrapped form m return kro
     return new Promise((resolve,reject)=>{
     var myscript=  document.createElement("script")
   myscript.src=mysrc

   myscript.onload=function()
   {
     resolve(8+'success')
   }
   document.body.appendChild(myscript)
   
   })
}
// method 1 
const main2=async()=>
{
       
   // console.log(new Date())
    console.log(new Date().getMilliseconds())
    let res=await loadmyscript('')
    console.log(new Date().getMilliseconds())
    //by this u will get time before and after loading the script 
}


//method 2 
let a=loadmyscript('')
a.then((val)=>{
    console.log(val)
})


/// practice set qn2 
// create promise and use async to get its value 

// creating promise that rejects 
let myfunction=()=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
               reject(new Error('Please its an error'))
        },3000)
    })
}

// using async funcn
let myfn=async()=>
{
    let d=await myfunction()
     console.log(d)
}

myfn()
// since its rejecting hence an error is been thrown
// hence we wanna handle it with try and catch 

//updated one :: 

// let myfn=async()=>
// {
//     try{
        
//     let d=await myfunction()
//     console.log(d)
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }





/// practice qn make 3 promises 
//>> analysis using await and promise.all

// >>>>>> using await
let p1=async()=>{

   return new Promise((resolve,reject)=>
   {
          setTimeout(()=>
          {
            resolve(10)
          },1000)
   })
}

let p2=async()=>{

    return new Promise((resolve,reject)=>
    {
           setTimeout(()=>
           {
             resolve(20)
           },2000)
    })
 }


 let p3=async()=>{

    return new Promise((resolve,reject)=>
    {
           setTimeout(()=>
           {
             resolve(30)
           },3000)
    })
 }


const run=async()=>
{
    // we r using time to keep track of time taken
    console.time()
    let s1=await p1()
    let s2=await p2()
    let s3=await p3()
    console.log(s1,s2,s3)
    console.timeEnd()
}

run()


//output ::::
// 10 20 30
//  8885.481201171875 ms



// >>>> when we use promise.all this takes less time  as compared to await

let pr1=async()=>{

    return new Promise((resolve,reject)=>
    {
           setTimeout(()=>
           {
             resolve(10)
           },1000)
    })
 }
 
 let pr2=async()=>{
 
     return new Promise((resolve,reject)=>
     {
            setTimeout(()=>
            {
              resolve(20)
            },2000)
     })
  }
 
 
  let pr3=async()=>{
 
     return new Promise((resolve,reject)=>
     {
            setTimeout(()=>
            {
              resolve(30)
            },3000)
     })
  }

//fn
const run2=async()=>
{
    // we r using time to keep track of time taken
    console.time()
    let sb1=await pr1()
    let sb2=await pr2()
    let sb3=await pr3()

    let a1a2a3=await Promise.all()
    console.log(a1a2a3)

    console.timeEnd()
}

run2()

//output:::
//[10, 20, 30]
// 7637.758056640625 ms  (less time )





