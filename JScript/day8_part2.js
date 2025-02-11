//sending POST REQUEST USING FETCH API 
// getReq has some limit for passing data to url
// POST REQUEST 

//JSON.stringify -> json obj to string
//JSON.parse -> json string to javascript object

// we should include the second argument of fetch Method for post request and that second argument is called as OPTIONS which itself is an object
// create an option 
let optn={
    
    method:"POST",
    
    headers:{ "authentication" : "Secret"},
    
    body : JSON.stringify({  // json to string
        title:'Akhila',
        body:'coder',
        userId: 1100
    })
}
// fetch method called here and also passing optn here as second argument
fetch('url',optn)//this returns a promise
           .then((resp)=>{return resp.json()})
           .then((val)=>{console.log(val)})










  // ASYNC AWAIT ALWAYS RETURNS A PROMISE 
  // How to do the same above codes using ASYNC AWAIT (ruk ruk kke kam chlega here)
 
const mycall=async (yedekho)=>{
let opt={
    
    method:"POST",
    
    headers:{ "authentication" : "Secret"},
    
    body : JSON.stringify(yedekho)
}
 
     // call fetch inside 
    let myprom = await fetch('url',opt)
    let  r = await myprom.json() // phle await for json response 
    return r //json yha return kro

}

// create another funcn to call it making it async 
 const mainy=async()=>{
      
    // here we constructed onj here only and passed it to async funcn
    let yedekko={  // json to string
        title:'HarryBhai',
        body:'coderBhai',
        userId: 1100
    }


    let a= await mycall(yedekko) //json lo
    console.log(a) // yha print kro use 
 }

mainy()// call it here





//// >>>>>>>>>>> COOKIES (used to store data)

// cookies are small strings of data stored directly in browser
// key value pairs separated by a dash ...... alag alag cookies separated by a semicolon
alert(document.cookie)

// cookies set by web server using SET COOKIE HTTP HEADER
// next time when a request arrives server knows who sent the req using COOKIE HTTP HEADER

// u can write a cookie without removing the existing cookies(no replacement happens) .. it just adds a new cookie 
document.cookie="name=Akku"
document.cookie//gives added cookie too

//adding another new cookie to existing sets of cookies
document.cookie="name2=Abhilasha"

//But if u will add another cookie with same key it will replace the existing one
document.cookie="name2=Alphina"
// since name2 is the same key then it will replace the older one only ie; Abhilasha will be replaced  by Alphina .. remaining cookies will be there as it is 


//// ENCODE URI COMPONENT 
// let n=prompt('Enter ur name ')
// let v=prompt('Enter ur value ')
// document.cookie=`${n}=${v}`  // this line will give error while using special characters as it cant convert to key value pair
// console.log(document.cookie)


// update using encodeURIComponent method
let n=prompt('Enter ur name ')
let v=prompt('Enter ur value ')
document.cookie=`${encodeURIComponent(n)}=${encodeURIComponent(v)}`  // this line will give error while using special characters as it cant convert to key value pair and thus fails to set cookie 
console.log(document.cookie)//this is a setcall

// u can decode them using a method call 
//decodeURIComponent('%3D')
//'='

document.cookie="name3=Krishna" // this is called as a setCall

// u can set only 1  cookie at a time
document.cookie="name3=Krishna ; name4=Ridhi"  // only krishna will be set & Ridhi will be ignored

//OPTIONAL ::  but for a single cookie u can set path=''  (at which it will be available) and expires=''(expiry date )
document.cookie="name3=Krishna ; path=' ' ; expires= ' '" 

 // EXTRA NOTE 
 //  key-value pair after encoding should not exceed 4KB of data
 // Total no of cookies set per domain is nearly in  20 







///// >>>>>> LOCAL STORAGE 

// if u set a cookie , then browser will sent cookie with every request to the server
// but local storage is web storage object and it will not be sent to the sever whenever a request is sent
//mostly used for storing data in a particular domain
// ur data will not disappear if u refresh the page or even on restart of the browser

 localStorage.setItem('name','Alkina')//check the application column in inspect


let pet=prompt('Enter ur petSpecies  ')
let petname=prompt('Enter ur petname ')
localStorage.setItem(pet,petname)// not as ('pet','petname')

console.log(`${petname} is the name of her ${pet}`)


// u can also get the value of a key using getItem(keyname) method
//.getItem(key)
console.log(`${localStorage.getItem(pet)} is the name of her ${pet}`)

// removeItem(keyname) will remove it from local storage
if(pet=='fish')localStorage.removeItem(pet)


//.clear() clears everything 
if(pet==0)
{
    localStorage.clear()

}

//NOTE :: if u set the same key again it will replace the earlier value of that key and will not create another key val pair .... DUPLICATE KEYS NHI HOTHI(updates key value)

//.key method
console.log(localStorage.key(1))// 1 index pe jo KEY he vo dethi he 

//.length() method
console.log(localStorage.length)//length of data in localstorage

// NOTE ::::: key value pairs always stored as strings
// another method ::
// localStorage.one=1 // SETS keyname=one AND value=1
// delete localStorage.one=1 // DELETE keyword se remove bhi kr skte ho





//// >>>>>>>>>>>>>>> SESSION STORAGE

//less used than local storage
// have same properties as local storage
// Session storage works only for current tab
// opening new tab creates new session storage and is deleted  but servives on refreshing

////   >>>>> STORAGE EVENT
//storage event is triggered when u update a local storage or session storage

window.onstorage=(e)=>
{
    alert("changed🤠")//on opening on 2 new tabs and updating in one tab will give alert in another tab of same page (lec 70)
    console.log(e)//storage event details 
}


/////////  PRACTICE QUESTIONS ::::

// let a=prompt("Enter ur note here")
// localStorage.setItem('note',a)



// QN 

// creating a note 
let nt=localStorage.getItem("note")
alert(nt) //otherwise purana wala hi dikao phle 

let a=prompt("Enter ur note here")//enter kra user ne tho

if(a){
        localStorage.setItem('note',a) // agar prompt m dala kuch thabhi update krna value kko
     }


     //deleting previous note :: 
    let r= confirm("wanna delete ?")
    if(r)
    {
        localStorage.removeItem('note')
        alert('deleted successfully !')
    }


