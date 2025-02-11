//>>>>>>>> Asynchronous and Synchronous 
//asynchronous funcn - wait krega abhi side m rho (scheduled)but complete krega vo pakka he 
//OUTPUT ::
//'start'
//'end'   
//'I am Time out funcn'     (last m aya after executing all others only ....par pakka it  will be executed at end )
console.log('start')

setTimeout(function()
{
    console.log('I am Time out funcn')
},1000)

console.log('end')


//----------------------------------------------------


//synchronous funcn :: line by line hi values lenge ..in continuous proper manner 
let n=prompt('Enter name')
let a=prompt('Enter age ')
console.log('my name is '+ n +' of age ' +a)



//.........PART 2 
//THIS TOPIC BELOW IS CALLED CALLBACK BASED  STYLE OF ASYNCHRONOUS PROGRAMMING becoz in asynchronous progmg its later executed na  just like settimeout

//CALLBACK FUNCTION 
//a function passed as argument to another function  which is then invoked inside that outer funcn
//script yani executable code tho code dena h use as code 
function loadmyscript(mysrc)
{
     //script bnao aur body m append kro
   var myscript=  document.createElement("script")
   myscript.src=mysrc
   myscript.onload=function()
   {
     console.log('Bhai Loaded') //jab script load hogi tho console me likke ayega 
   }
   document.body.appendChild(myscript)
}

//main fn call
loadmyscript('......')

// jan script load hogi tho konsa funcn call krna h ye runtime m bthao
function hello()
{
    alert('Hello')
}

function gudmg()
{
    alert('GoodMorning')
}

//>>UPDATION
//suppose if i wanna run hello then pass funcn name hello to loadmyscript main fcn call and in loadmyscript funcn description

//main fn call
loadmyscript('......',hello)//hello funcn name is passed 

//funcn description
function loadmyscript(mysrc,CALLBACK)//callback is funcn hello thats been passed in above lines 
{
     //script bnao aur body m append kro
   var myscript=  document.createElement("script")
   myscript.src=mysrc

   myscript.onload=function()
   {
     console.log('Bhai Loaded') //jab script load hogi tho console me likke ayega 
     CALLBACK()//aur uss passed funcn kko yha invoke kro :)
   }
   document.body.appendChild(myscript)
}

// >>> IF THERE IS AN ARGUMENT IN CALLBACK THEN TAKE THAT TOO

function gudmg(srcname)
{
    alert('GoodMorning' + srcname)
}

//fucn description
function loadmyscript(mysrc,CALLBACK)//callback is funcn hello thats been passed in above lines 
{
     //script bnao aur body m append kro
   var myscript=  document.createElement("script")
   myscript.src=mysrc

   myscript.onload=function()
   {
     console.log('Bhai Loaded') //jab script load hogi tho console me likke ayega 
     CALLBACK(mysrc)//aur uss passed funcn kko yha invoke kro :) WITH PASSED ARGUMENT
   }
   document.body.appendChild(myscript)
}


//main fn call no change
loadmyscript('......',gudmg)//hello funcn name is passed 



//-------------------further on callBacks


// if there comes any error esp if that script doesnt exist while loading script its handled by taking any action by running a funcn
function loadmyscript(mysrc,CALLBACK)//callback is funcn hello thats been passed in above lines 
{
     //script bnao aur body m append kro
   var myscript=  document.createElement("script")
   myscript.src=mysrc

   myscript.onload=function()
   {
     console.log('Bhai Loaded') //jab script load hogi tho console me likke ayega 
     CALLBACK(mysrc)//aur uss passed funcn kko yha invoke kro :) WITH PASSED ARGUMENT
   }

   //updated code here to print something if error occurs in loading
   myscript.onerror=function()
   {
      console.log('Error while loading ' + mysrc)
   }

   document.body.appendChild(myscript)
}


//handling errors are left to do  :(














