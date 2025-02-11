// Async / Await 
// always make js wait until value is returned  
// special promises to work with promises in js
// async always returns a promise and other resolved values are wrapped inside the promise 
// only becoz async returns a promise u can apply .then to it 




async function Akku()
{
    return 5
}
Akku().then((val)=>
{
    console.log(val)
})

//NOTE :: if u try to remove async keyword then it will give error that .then is not applicable 

// function Akhi()
// {
//     return 8
// }
// Akhi().then((val)=>//it is not returning a promise as u removed async so u cant apply .then here
// {
//     console.log(val)
// })

// There are 2 methods to know if ur promise is fulfilled  IN ASYNC 
// method 1 is using .then  AS USUAL

async function weather()
{
    let delhi=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                resolve('27 deg')

            },1000)
    })


    let Bang=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                resolve('21 deg')

            },2000)
    })


    delhi.then(alert)//alert m deg cel dikayegi
    Bang.then(alert)

}

//calling funcn here
weather()

// NOW USING AWAIT 
// AWAIT KEYWORD RESOLVES THE VALUE FOR FULFILLMENT
//await dika tho abhi aghe math bdo  ..phle value resolve kro fulfill kro
// pending nhi rkni chahiye ya tho reject ho ya resolve

async function weather2()
{
    let Kerala=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                resolve('17 deg')

            },1000)
    })


    let Goa=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                resolve('18 deg')

            },2000)
    })


    //console.log('Fetching Kerala Weather')
    let keralaW=await Kerala // jo bhi val hogi promise ki vo variable m store kro
    //console.log('Fetched Kerala Weather'+keralaW)

    //console.log('Fetching Goa Weather')
    let GoaW=await Goa
    //console.log('Fetching Goa Weather'+GoaW)

    return [keralaW,GoaW]


}

//calling funcn here
let w=weather2()
console.log(w)

// output ::
// [[PromiseResult]]: Array(2)
// 0: "17 deg"
// 1: "18 deg"

//HENCE AWAIT STOPS THE EXECUTION OF THE FUNCTION IN BETWEEN 
// by making funcn ASYNC AND using AWAIT keyword we can cease the execution of prgm in js 







//------------------------------------------------------------
//>>>>>>>>>>>>> if u introduce another funcn as cherry then 


async function weather3()
{
    let Meghalaya=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                resolve('9 deg')

            },1000)
    })


    let Chennai=new Promise((resolve,reject)=>
    {
        setTimeout(()=>
            {
                resolve('28 deg')

            },2000)
    })


    console.log('Fetching Megha Weather')
    let MeghalayaW=await Meghalaya
    console.log('Fetched Mega Weather'+MeghalayaW)



    console.log('Fetching Chennai Weather')
    let ChennaiW=await Chennai
    console.log('Fetching Chennai Weather'+ChennaiW)

    return [MeghalayaW,ChennaiW]


}

//calling funcn1  here
let wr=weather3()
console.log(wr)

//creating another funcn
const cherry=()=>
{
    console.log('I am cherry , second funcn ')
}

//calling second funcn 
cherry()

////// Note that cherry funcn will not wait for weather3 to execute to end  its execution
//instead both weather3 and cherry will be executing parallelly



//But if u want u can make one funcn to complete and then only start the other one 
// u can do that by using AWAIT before every funcn

const choco=async()=>
{
    let myprom=new Promise((resolve,reject)=>
        {
            setTimeout(()=>
                {
                    resolve('DiaRYmILK')
                    
    
                },2000)
        })

     console.log('Fetching Yummy cream')
    let mypromW=await myprom // firstly make promise done after 2 sec
    console.log('Ready choco '+mypromW)


}
const moco=async()=>
{
    console.log('I am moco')
}

const main1=async()=>
{
    console.log('Welcome guys !')
    let res1= await choco()//first completes choco funcn then only call moco and print moco's value
    let res2= await moco()
}
main1()


//output ::

//Welcome guys !
//Fetching Yummy cream
//Ready choco DiaRYmILK
// I am moco
























