//Using LOOP 
let arr1=[1,2,3,4,5]
//loop1  - for..each
arr1.forEach((ele)=>
{
    console.log(ele*ele)
})

//loop2 - for..of 
for(let i of arr1)
{
    console.log(i)//i give val
}
// arrays are objects and in for in loop of objects hence it have keys and i return keys here
for(let i in arr1)
{
    console.log(i,arr1[i])// i give key,arr1[i] give val
    
}




const k=(elem)=>{
   console.log(elem/2)
}
k(6)//3

//To create array from any other object
let namee='Akhila'
let arr=Array.from(namee)
console.log(arr)

//for each jab sirf elements me opertaions perform krni ho, koi array nhi bntha nya isme
//MAP jab hame array elements me koi operations krke usko new array me return krni ho tho

let arr2=[1,2,3,4,5]
//arr3 is new array
let arr3=arr2.map((ele)=>
{
    console.log(ele)
    return ele+1
})
console.log(arr3)

//3 parameter of map and for....each too
let emoji=['🤠','🥂','🐨' ,'❤️']
let emj=emoji.map((val,index,array)=>
{
    console.log(val,index,array)//phle val , then index, then complete array
     return val
})
console.log(emj)//yha kuch print hone kelie map m return krni hothi h, this forms a new array


//filter - create NEW array with those elements that passes the test, doent chnge origial arraya
let p=[18,3,34,2,9,47]
let r=p.filter((g)=>
{
    return g<10
})
console.log(r)

//Reduces the array to a single value with some operation 
let arr4=[9,7,1]
let arr5=arr4.reduce((r1,r2)=>
{
    return r1-r2//return 1 
})
console.log(arr5)
//or method 2 using fn
const fn=(r1,r2)=>
{
    return r1-r2//return 1 
}
let arr6=arr4.reduce(fn)
console.log(arr6)

//Questions on arrays 
let myarr=[1,2,3,4,5]
myarr.push(25)
console.log(myarr)

// do{
//     a=Number.parseInt(promt('Enter val'))
//     arr.push(a)
// }
// while(a!=0)
//console.log(arr)

let div=[12,10,2,30,50]
let g=div.filter((a)=>
{
   return a%10==0
})
console.log(g)

//create an array 
let res=[1,2,3,4,5]
let j=res.map((t)=>
{
    return t*t
})
console.log(j)

// factorial using reduce
let res1=[1,2,3,4,5]
let j1=res.reduce((t1,t2)=>
{
    return t1*t2
})
console.log(j1)




//js in browser 
// js has embedded engine called js engine or js runtime 
// dev tools in browser are elements , console (err), networks(net req) , memory, performance 
// 2 ways of script tagging 
// <script></script> (internal) tag html me hi dalo ya do <script src="">(external)
// external tag use krne ka fayada --> separation of work and concern --> browser cache yani memory cache se load hogi instead of loading them again saving time and data


//--------------CONSOLE OBJECTS 
console.log(console)// give all console methods 
console.error("you are wrong ")//considered as error
//if assertion is true or false 
console.assert(555<6)//gives assertion failed  becoz 555>6
console.assert(555>8)//undefined 
console.clear()//give console is cleared 

//console.table creates a table of ur data
data={Anashu : 96 , Sindhu :67 , Akhila : 25 , Achu : 78}
console.table(data)

console.warn("Hey don't drink Alcohol")//gives yello warning

// Console.time function calculates time taken 
//eg 1

console.time("akku")
console.timeEnd('akku')

//for LOOP 
console.time("ForLoop")

 for(i=0;i<900;i++)
 {
    console.log(900)
   
 }
console.timeEnd("ForLoop")


//eg 2 
console.time("WhileLoop")
let tm=0
 while(tm<900)
 {
    console.log(900)
    tm++
 }
console.timeEnd("WhileLoop")




