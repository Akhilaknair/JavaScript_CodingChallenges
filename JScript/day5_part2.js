//BROWSER EVENTS >>>>  Handling events

// mouse :: onclick , contextmenu(right click),mouseover & mouseout,mousedown & mouseup,mousemove
//Keyboard :: keyup , keydown
//form :: submit , focus
// ** imp >> Dom events :: DOMContextLoaded 



//1. through HTML ATTTRIBUTES only

/* 

<div class="divclass" onmouseenter="console.log('mouse enetr hua')" onclick="console.log('mouse ppe click hua ')">janmashtami</div>

<div class="mydiv">
    <button onclick="alert('Hey'); let a=9 ; console.log(9)">Click me</button>
</div> 

*/

//2. onclick property 
let item=document.getElementsByClassName("reddy")[0]

//   elem.onclick=function()=>
//   {
//         alert("yes")
//   }


item.onclick=()=>
{
    let c=document.getElementsByClassName("reddy")[0]
    c.innerHTML="Hello World"
}
//replaces googly moogly by helloWorld 

//NOTE :::: that onclick property by using method 2 replaces the first one if overwritten the same event for same element



//>>>>>>>>>  TOPIC 2 
// USING ADD EVENT LISTENERS 
let gbtn=document.getElementById("btn")
gbtn.addEventListener('click',function(e)
{
    alert("HelloWorld1")
})


gbtn.addEventListener('click',function(e)
{
    alert("HelloWorld2")
})



//  >> REMOVE EVENT FUNCTION HAVE A PROBLEM 
// u can remove an event listener only if u make the function as an object ie;
// note that both above events on gbtn occur but how to tell js that which prgm has to be removed ie; printing helloworld1 or helloworld2 

// THE CODE BELOW WILL TELL THAT HELLOWORLD1 HAS TO BE REMOVED BUT WILL NOT WORK :(((((((

// gbtn.removeEventListener('click',function(e)
// {
//     alert("HelloWorld1")
// })


// HENCE CORRECT METHOD IS BY MAKING THE FUNCTION IN ADDEVENTLISTENERS AS OBJECT
//after giving prompt values if u enetr 1 in prompt and then click onn btn2 ie; 'remove check krme kelie' vala button then only helloWorld1 alert will be visible 
//after giving prompt val as 2 then 'remove check krne kelie'  btn ppe click krne ppe then only HellWorld2 alert hi dikkegi
let pro=prompt("Enter 1 or 2 ")



let gbtn2=document.getElementById("btn2")
let x=function(e)
{
    alert("HelloWorld1")
}
gbtn2.addEventListener('click',x)

let y=function(e)
{
    alert("HelloWorld2")
}
gbtn2.addEventListener('click',y)

if(pro=="1")
{
    gbtn2.removeEventListener('click',y)
}
else if(pro=="2")
{
    gbtn2.removeEventListener('click',x)
}


//summary 
// elem.addEventListener(event,funcn)
// elem.removeEvenetListener(event,funcn as obj only :) )

//EXTRA 
gbtn.addEventListener('click',function(e)
{
    // e is the event obj passed by clicking event to the funcn ; even if u avoid writing e in event then too it will be all right 
    console.log(e)//event bthatha he kki ye click event he yani pointer event ; gives many thing like clientX,Y,path etc
    console.log(e.target)//jispe click kra h yani button pe 
    console.log(e.type)// pointer event jaise type 
    console.log(e.currentTarget)//which elemennt handled the event 
    console.log(e.clientX,e.clientY)//coordinates of cursor
   

})


//Bookmark vala qn kelie 
let bk=document.getElementById('fbi')
bk.addEventListener('click',function(e)
{
    window.location="https://fb.com"
})

// glowing bulb qn ka code 
let b=document.getElementById('blb')//can also select the  same using doc.querySelector('#blb')
setInterval(function()
{
    b.classList.toggle('bulb')
    b.classList.toggle('pink') 
},500)













