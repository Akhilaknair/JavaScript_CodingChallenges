const item={
    "Akhila":true,
    "Sindhu":0,
    "Anu":undefined

}
console.log(item["Akhila"])



let a =23
console.log(typeof a)

//practice
//qn1
let c="Akhila"
let b=24
console.log(b+c)
console.log(typeof(b+c))

//qn2

//objects ke andar ke ref ko can be changed 
//a2 is const usko change nhi karpayeneb aur kuhc aur dal bhi nhi skte 
// a2=45 // will give error 
//iss obj ke andhar kuch aur dal skte ho aur update kr skte ho par a1 ko koi val assign nhi kr skte completely
const a2=
{
    class:"science",
    section :1 ,
     hobby:"dance"

}
a2['Read']="No"
a2['Music']="Yes"
console.log(a2)
a2['class']="Arts"
console.log(a2)
console.log(a2.hobby)


//  in !true -> ! is operator and true is operand
//opeartor s
let x=5
let y=2
console.log("x ka power y",x**y)

//a++ ++a
let s=10 
console.log(s++)//phle vala hi dikao par update krna bechare kko
console.log(s)
console.log(--s) //phle  hi kro kam phir vhi same print bhi kro 
console.log(s)

//arithmetic operator :: z**=y yani z=z**y(z ka power y)
// assignment operatr
// === -> checks if both are of same datatype or not 

//have alert and prompt box 
// let a3=prompt("Enter Age")
// a3=Number.parseInt(a3)
// console.log(a3)


// switch case 
let str='Mango'
switch(str)
{
    case 'Mango': console.log('Mango Man');
    break;
    case 'Lemon': console.log('Lemon Man');
    break;
    default : console.log('Gear Up')
}
// turnary ? operator
let age=36
console.log("you can ",(age<18)?"Not Drive":"Yes drive surely")



