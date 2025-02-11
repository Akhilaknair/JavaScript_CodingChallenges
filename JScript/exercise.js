let a=[
         'Hare Rama',
         'Hare Rama',
         'Hare Krishna',
         'Hare Krishna',
         'Hare Rama',
         'Hare Rama',
         'Hare Krishna',
         'Hare Krishna'
]


const sleep=async(time)=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(true)},time*1000)
    })
}


const show=async(msg)=>
{
      await sleep(2)
      console.log(msg)
      //textdivtag.innerHTML=textdivtag.innerHTML + msg +"<br>"
}

//iife
(async()=>{
    
    for(let i=0 ;i<a.length;i++)
    {
             
        await  show(a[i])
    }

})()

















