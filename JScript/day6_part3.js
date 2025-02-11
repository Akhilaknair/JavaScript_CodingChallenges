// Promise Chaining  inside .then calls()
//make a promise 
let p1=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        console.log('Timeout vala hu')
        resolve(90)//resolve kro
    },2000)
})

//.then use kro 
p1.then((val)=>//agar resolve hothi he tho resolve ki val print kro aur agla promise bnaoo iske andhar
{
    console.log(val)
    let p2=new Promise((resolve,reject)=>{

        resolve('Promise 2 he')
    })
    return p2

}).then((val)=>//we waited for return of p2 then we again did .then on that returned p2
{
    console.log('returned pe chlaya vala then hu me'+val)
    return 4
}).then((val)=>//in last we returned a constant val but js automatically converts it to a promise so that i can apply .then
{
    console.log('m converted promise hu ')
})


//yha ham callback hell prblm kko dhoor kr rhe h kyoki yha ham callback ppe callback run nhi kr rhe he instead we r just doing .then only
























