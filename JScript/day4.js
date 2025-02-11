//getAttribute
let a=mydiv.getAttribute('class')
console.log(a)// get myclass as the class name





//hasAttribute to check for existence of an attribute 
console.log(mydiv.hasAttribute('class'))//return true 
console.log(mydiv.hasAttribute('style'))//return false  as there no such attri for div with mydiv as id
 
//setAttribute take 2  parameters
mydiv.setAttribute("hidden","true")
mydiv.setAttribute("class","true mynewclass")

//remove 
mydiv.removeAttribute("class")

//to get all the attributes 
console.log(mydiv.attributes)

// to create custom attributes apna vala
// data-name  is the syntax
// <div id='mydiv' class="myclass" data-game="true" data-play="Akku">Heylo guys </div>
console.log(mydiv.datasets)//game:true,play:Akku
console.log(mydiv.datasets.game)//give: true
console.log(mydiv.datasets.play)//play:Akku



// HTML insertion methods 
// 1. using innerHTML if u wanna insert  one or 2 elements 
let d=document.getElementsByTagName('div')[0]// note that this [0] index is imp
d.innerHTML=d.innerHTML + '<h1>Kaise ho guys </h1>'// adds this new elem in div 

//2. using create element method (many insertion needed then do it using loop)
let newcontent=document.createElement('div')
newcontent.innerHTML='<h1>Kaise ho guys</h1>'
d.appendChild(newcontent)


// using append and prepend methods 
// append : at end of node of slected element as container
//prepend : at beginning of node of selected element

// APPEND (selected container ka last child)
let nd=document.getElementsByTagName('div')[1]
let newele=document.createElement('div')
newele.innerHTML='<h1>Lets tryy </h1>'
nd.append(newele)// last m dal detha h 'Lets Tryy' kko of the selected element
//Im the outer one
//Im the inner one 
//lets tryy



// PREPEND(selected container ka first child)
let nd2=document.getElementsByTagName('div')[1]
let newelem=document.createElement('div')
newelem.innerHTML='<h1>Lets tryy </h1>'
nd2.append(newelem)// shuru m dal detha h 'lets tryy ' kko  of the selected element 
// //lets tryy
//Im the outer one
//Im the inner one 

//before and After
//BEFORE :: insert before the node, selected element se just bahr (outside selected node)
//After ::insert after the node , selected node ke just badh(outside selected node )

let x=document.getElementsByTagName('div')[1]
let y=document.createElement('div')
y.innerHTML='<h1>Lets tryy </h1>'
x.before(y)//similarly u have after


//.replaceWith function
//the earlier one which got replaced will be vanished 
let res=document.getElementsByTagName('span')[0]// note that this [0] index is imp
let z=document.createElement('div')
z.innerHTML='<h1>Krishna Jayanti</h1>'
res.replaceWith(z)//span with ganesh replaced with a div of krishna :)


















