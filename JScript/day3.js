//descendant nodes- nestesd children nodes of a tag
//when we find firstchild nodes then it also counts its textnodes,comment nodes etc apart from element
console.log(document.body.firstChild)
//it gives a text node :( but its a div actually 
//once u remove space (for text) between body and div the ans will be that is the first child will be a div :)


console.log(document.body.lastChild)//script tag
console.log(document.body.childNodes)//all tags 

//NOTE  :: here body yani koi bhi element hosakta he 
//body.childNodes[0]===body.firstChild
//body.childNodes[body.childNodes.length -1]===body.lastChild
//element.hasChildNodes return true / false 
//childNodes look like an array but its a collection or a node list in real not an array hence u cannt apply array functions .

//How to convert to an array
let arr=Array.from(document.body.childNodes)
console.log(arr)
//use $0 to refer to hovered element of html
//$1 the previously selected one is refered
//eg $0.children will give all chikldren nodes of hovered element
//dom collections are read only , u cant reassign its value 
//>>>>        can be iterated in childNodes Using a for..of loop


//same parent ke children called siblings 
// head ka right ya next sibling is body 


//Acessing parent using .parentNode ya .ParentElement
//Note that documentElement is HTML TAG  
let a=document.documentElement.parentNode
console.log(a)//returns document ,
// becoz .parentNode returns any node if its text or anything, here we got document as its parent of HTML but note that document is not an element

let b=document.documentElement.parentElement
console.log(b)//returens null
// becoz .parentElement returns an HTML element but there is no parent element for HTML hence null

let s=document.body.firstChild //div
//let r=s.firstChild.nextSibling // s.first child is h3 , next Sibling is span 
//similarly we have .previousSibling property

// ELEMENT ONLY NAVIGATION >>>>>   HOW TO GET ONLY ELEMENT NODES AS IN ALL PREVIOUS ATTEMPTS WE GOT ALL KIND OF NODES ALSO LIKE TEXT NODES , COMMENT NODES 
let bdy=document.body
let res=bdy.firstChild
let res2=bdy.firstElementChild
console.log("First Child :: ",res)//first child will be a text node becoz of spaces 
console.log("First Element Child :: ",res2)//first elementChild is div :)

//qn :: to make the all li tag of ul to red background color
Array.from(document.getElementsByTagName('li')).forEach((ele)=>
{
    ele.style.background='green'
})

//Tips :: 
//let num=Math.floor(Math.random()*3) //generates random no between 0,1,2
//let res=["S","W","G"][num]



//similarly we have .lastElementChild , .nextElementSibling , .previousElementSibling 
//styling can be done using it 
const changered=()=>{
    document.body.firstElementChild.style.background='red'
}
// call changered() in browser console 

//----------------------------------------------------------------------------------

//>>>>>>>>>>>SEARCHING THE DOM 
// U can do console.log of all the below ones in browser 


//>> #id se return 1 elemet
let ctitle=document.getElementById("myid")
ctitle.style.color='red'//set color to red

//There are 4 css selectors ::  mostly used in querySelector and querySelectorAll
// In CSS, selectors are patterns used to select the element(s) you want to style 
// ie; # for id , . for class Name , * for all ya p.intro yani para tag with class intro....etc


//>>QuerySelector se  (uses . period for class name )
document.querySelector('.this')//selects only first element with this class name 
//then u can change css  like 
document.querySelector('.this').style.color='red'


//>> querySelectorAll : selects all elements with that class name 
document.querySelectorAll('.this')
//here if u wanna pick any particular element 
let ctitles=document.querySelectorAll('.this')
ctitles[0].style.color='red'
ctitles[2].style.color='pink'

//>>> using class name , return many elements 
document.getElementsByClassName('myclass')

//>>> using tag name , return many elements 
document.getElementsByTagName('myclass')

//>> using any name keyword 
document.getElementsByName('myclass')// can give name ='myname' for any element

//SMART WORK
console.log(id1)//gives element with id as id1

// some imp dom serach methods 
// >>>1   .matches 
//checks if ur element matches css selector or not 
//it either returns true ya false 

let checkid=document.getElementById('id1')//gives a div 
console.log(checkid)
console.log(checkid.matches('.box1'))//returns true because the div selected have class box1
console.log(checkid.matches('.box2'))//returns false because the div selected have class box1 and not box2


// >>>2   .closest  
//checks for closest ancestor 
//it even checks the element itself too
// first check itself if css selector maatches or not then goes to its parent and then its parent and so on 

console.log(sp1.closest('.box1'))//return yes as span1 have a parent with class name as box1
console.log(sp1.closest('.box2'))//return false as span1 have no parent with class name as box2 
console.log(sp1.closest('#sp1'))//return yes as this span itself have id as sp1

// >>>3   .contains 
//returns true in elem1.contains(elem2)  if elem2 is inside of elem1 or if elem1===elem2 itself 
let divid=document.getElementById('id1')
let spid=document.getElementById('sp1')
console.log(divid.contains(spid))//true
console.log(spid.contains(spid))//true

//document.getElementsByTagName('nav')[0].firstElementChild.style.color="red"



//  >>>> INNER AND OUTER HTML 
// innerHTML :: inner components only 
// outer HTML :: inner components + the element itself 
// using dir property 
console.log(document.getElementsByTagName('nav')[0])// give nav tag 
console.dir(document.getElementsByTagName('nav')[0])// give javascript obj with methods and func

// nodename and tagname properties 
//node name can be applied for any node or element like below
console.log(document.body.firstElementChild.nodeName)//div
console.log(document.body.firstChild.nodeName)//textNode
//tag name only used for element 

//inner html can be retrieved and also can be  added to code even

console.log(myspan.innerHTML)//myspan ke andhar k text dedenge aur agr koi aur element h tho vo bhi dedenge 
//..sabkuch dedenge andhar ka in short and is returned in form of a string
myspan.innerHTML='<i>I am from italy</i>'// to add inner html to ant element

// outer HTML 
console.log(myspan.outerHTML)// gives everything inside span along with span itself 
myspan.outerHTML='<i> Guys , Be Happy </i>'//adds an outer HTML
// u can use .nodeValue or .data to get values inside nodes like textnode,commentnodes etc.
console.log(document.body.textContent)//gives only all the text inside body

//>>.hidden property in html tag after giving id to it 
// that text will be hidden from website
//<h3 id="myheading" hidden>Dude I am gonna hide somewhere</h3>
//in browser select using $0 or even directlly using its id and set $0.hidden=false then it will become visible and again if u set true it will be hidden











