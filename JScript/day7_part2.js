//>>>>>>>>>>>> METHODS OF PROMISE API 's

//6 static methods 
// all,allsettled,race,any,resolve,reject



//.all -> jab sara hojaye tho bthao returned as an array
//Note that if any one of promise fails   or if it gets rejected in above same code  then our Promise.all will not work ...it will throw error of that rejected one 

let p1=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
        resolve(1)
    },1000)
})

let p2=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
       resolve(2)
    },2000)
})

let p3=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
        resolve(3)
    },3000)
})
// if u want to see if all the promises is done then print 

let prom_all_done=Promise.all([p1,p2,p3])//give promises in array
prom_all_done.then((val)=>

{
    console.log('All prom are done baby ! '+val)
})







//-----------------------------------------------
//.allSettled
//Note that if any one of promise fails   or if it gets rejected in above same code  then our Promise.all will not work ...it will throw error of that rejected one 

let p4=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
        resolve(4)
    },4000)
})

let p5=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
       reject(new Error(" some error occured "))
    },5000)
})

let p6=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
        resolve(6)
    },6000)
})
// if u want to see if all the promises that are done even if some are been rejected 

let jitna_hua_dedo=Promise.allSettled([p4,p5,p6])//give promises in array
jitna_hua_dedo.then((val)=>

{
    console.log(val)//status of all promises is returned 
})





//----------------------------------------------------
//.race
//Promise.race jo phle hojayega vo dikaya jayega
// drawBack :: even if phle vala reject ho tho bhi vhi dikayega as an error 
let prom1=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
        resolve(5)
    },5000)
})

let prom2=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
       resolve(7)
    },7000)
})

let prom3=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
        resolve(9)
    },9000)
})

let race_win=Promise.race([prom1,prom2,prom3])//give promises in array
race_win.then((val)=>

{
    console.log('U won the Prom Race Baby ! '+val)
})
// Prom1 with resolve val5 vala promise will win race 





//-------------------------------------
//.any
// race vala give u first executed one even if its an error then too
//BUT IF U WANNA NEED SOME REAL VALUE OF PROMISE  THAT HAS BEEN EXECUTED FIRST // par aghr bechare ko koi bhi nhi mila array se tho majboori m Aggregate error throw krega 

let proms1=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
        resolve(5)
    },8000)
})

let proms2=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
       resolve(7)
    },7000)
})

let proms3=new Promise((resolve,reject)=>{

    setTimeout(()=>
    {
        resolve(9)
    },9000)
})


let race_win_real_val=Promise.any([proms1,proms2,proms3])//give promises in array
race_win_real_val.then((val)=>

{
    console.log('U r the first real val ! '+val)
})
//output ::
//U r the first real val ! 7

// other Api of promise are promise.resolve(val) and promise.reject(Error)
