const loadscript=(src)=>{
    
   // return as a  promise 
 
   return new Promise((resolve,reject)=>{
    
//create a script on load return resolved val else on error reject it
    let myscript=document.createElement("script")
    myscript.src=src
    document.body.appendChild(myscript)

      myscript.onload=()=>
      {
          resolve(9)
      }

      myscript.onerror=()=>
      {
        reject(0)
      }

    })
}


// we r returning a promise becoz we wanna apply .then and .catch
let pro=loadscript('......')

// applying then and catch
p1.then((val)=>{
    console.log('Hurray '+val)
}).catch((error)=>{
    console.log('Some error occured dude :(')
})

// also u can load as many scripts as u wish and if any loading fails it will be catched handling callback hells
p1.then((val)=>{

    console.log('Hurray '+val)
    return loadscript('........')

}).then(()=>{
    console.log('Second script is also ready sir ')
})

.catch((error)=>{
    console.log('Some error occured dude :(')
})


///  >>>>>>>>> TOPIC 
// Attatching multiple handlers to a single promise p1
// all handlers run independently will not wait for each other as in chaining
p1.then((val)=>{

    console.log('Hurray1 ')

})

p1.then((val)=>{

    console.log('Hurray2 ')

})

p1.then((val)=>{

    console.log('Hurray 3')

})

//output ::
// hurray1
// hurray2
// hurray3

                    // >>>>>>>>>>> DIFFERENCE 
// Diff between attaching handlers and chaining
//In chaining u always wait for something to be returned and on returned val u will do something with it .



//ex : 
//hmesha phle vo return hotha he usse related vala .then badh m execute hothi h


p1.then(()=>
{
    console.log('Akku1')
    //its promise been returned inside a setTimeout
    let prom=new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
        resolve(5)

    },2000)
    
    return prom
})
}).then(()=>console.log('Akku2'))



p1.then((val)=>{

    console.log('Akku 3')

})
//output::
// Akku1
// Akku3
// Akku2 //becoz it waits for prom to be returned in setTimeout




