//>> alert >> prompt >> confirm  ->these blocks the main execution thread ie; 
//ye late hokke print krta h doc.write se ...
//yani sare boxes ek bar close hone pe last m write hotha h

alert("Hi")
let val=prompt("enter value",345)//second parameter is default value for prompt 
// prompt always take a value in string hence to make it to string convert using parseInt

document.write(val)
alert("you entered type of "+(typeof val) )//string 

//confirm allows to choose , u have okay or cancel option here 
let conf=confirm('wanna write')
if(conf)//if yes 
{
    document.write("Writing")
}
else document.write('No Issues')


// Dom Bom Window Object


// js  helps in css manipulation :)
//dom - html page becomes an js object called document
//doc.body.style="tomato"

console.log(window)

//Bom (browser obj model) additional browser obj to work except with document 
// ex of BOM is confirm , alert, prompt .
// location.href="https://codewithharry.com"//redirrect to another URL

// practice set 

//qn 
let col=prompt("Enter colour")
document.body.style.background=col


//qn 1
// let age=prompt("Enter age")
// age=Number.parseInt(age)

// const canPass=(ages)=>
// {
//    return ages<18?false :true
// }
// if (canPass(age))
// {
//     alert("yes")
// }
// else alert("No")


// // qn 2 to keep on asking for this qn using confirm 
let ages=0
const canPass2=(ages)=>
{
   return ages<18?false :true
}

 let runtrue=true
while(runtrue)
{

ages=prompt("Enter age")
ages=Number.parseInt(ages)

if (canPass2(ages))
{
    alert("yes")
}
else alert("No")

runtrue=confirm("Do You Wanna try again")
}

//qn to change host adress
num=prompt("Enter num")
num=Number.parseInt(num)
if(num>4)
{
    location.href="https://google.com"
}












