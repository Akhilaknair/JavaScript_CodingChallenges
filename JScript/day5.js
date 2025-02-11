alert("hello")
//setTimeout comes after this much delay and takes 2 parameters :: funcn and time
let res=setTimeout(function()
{
    alert('Iam inside setTimeout interval')
},2000)//time in 4 seconds 
//console.log(a)

// if u do console.log of the setTimeout function then it will print a number thats ur timer id 
//Now if u wanna avoid or dont wanna run this setTimeout function call clearTimeout()

clearTimeout(res)//this removes setTimeout call

// function in setTimeout with argumnts (takes time to run )
const sum=(a,b)=>
{
   document.write("sum is :: ",a+b)
}
setTimeout(sum,1000,4,2)//4 and 2 is parameters  of sum

//more parametres 
const multiply=(a,b,c)=>
{
   document.write("product is :: ",a*b*c)
}
setTimeout(multiply,4000,4,2,2)//4 2,and 2 is parameters  of product


//SET INTERVAL (infinite) repeatedly calls the same function after that interval :: mostly used for fetching data continuously 
//SET TIMEOUT (finite) runs only once after that interval

let tim=setInterval(function()
{
    alert("Runs Infinitely 🤠")

},3000)

clearInterval(tim)//closes the interval call

// function in setInterval with argumnts (takes time to run )
const sum2=(a,b)=>
{
   document.write("sum is :: ",a+b)
}
setInterval(sum2,1000,4,3)//4 and 2 is parameters  of sum



let bdy=document.getElementById('bdy')
const krishna=(k)=>
{
    document.body.style.background='light-yellow'
    document.body.style.color='blue'
//  document.body.style.backgroundImage="url('krishna.jpg')"
    document.write(k)
   
}
setInterval(krishna,0,'HareKrishna❤️')//4 and 2 is parameters  of sum













