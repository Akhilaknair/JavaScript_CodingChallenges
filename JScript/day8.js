//js  can be used to send information from network using Ajax 
// fetch API is used to get data from network
// >>>> Fetch API always returns a promise .. and that promise is been resolved into another promise whose result is ur final result 
// give the url and bringing data from the url

let prom=fetch('url')//without options a get request is sent 

prom.then((val1)=>
{
    return val1.json()//once u get json val agin do .then
}).then((val2)=>
{
    console.log(val2)
})






// hence getting a response is a 2 stage process (2 .then)

// 1. an object of response class having 'status' and 'ok' properties to check ur status 
let pro=fetch('url')//without options a get request is sent 

pro.then((response)=>
{
    console.log(response.status)//200  :: https status code 
    console.log(response.ok)// true 
    return response.json()//here json is returned .....once u get json val agin do .then

}).then((val2)=>
{
    console.log(val2)
})



//2. Then u call any method to access the body in different formats 
response.text()//return text
response.json()// js obj is returned that parse response as JSON 
// other methods :: .fromData , .blob() , .arraybuffer()

// NOTE that u can call any 1 method at a time
let p=fetch('url')

p.then((response)=>
{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.text())//once u read as a text 
    return response.json()//this will give u an error if u read again as a json becoz u can call any 1 method here at a time 

}).then((val2)=>
{
    console.log(val2)// if u do .text() above u will get a string or if u do .json u will get a json obj
})






////// Response Headers 
// u can get response headers using console.log(response.headers)







////// Request headers (these r some info that are given with a request)
// these r sent along with fetch 

let res=fetch('url',{
    //This is the option part(option itself is an object )
    // ::  obj is created 
     headers:{   //header is key of the obj
        authentication:'secret'  // authenticn is also an obj
     }
})






