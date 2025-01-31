// spraed operator 

 //1.array merging
var arr1=["kinu","lemon"]
var food=[arr1,"apple"]
var food=[...arr1,"appple"]
console.log(food)

//2.merging 2 objects
var car={model:"bmw",color:"red"};
var fd={price:"7 lakhs"}
var details={...car,...fd}
console.log(details)

///3. stretching to only basd on no of params needed ! //jitna req params hai utna lelo arr mai se
function fun(x,y)
{
    console.log("sum is ",x+y);
}
var arr=[8,9,0,1,3,4,]
fun(...arr)//passing array as arg

////4.filling remainigng param through spraed operator 
var arr2=[1,2,0,0]
function add(a,b,c,d,e)
{
    console.log("final sum",a+b+c+d+e);
}
add(8,...arr2)//baki 4 jake array2 se lelo


// REST PARAMS 
function fn(...x)
{   for(var i=0;i<x.length;i++)
    console.log(x[i]);
}
fn(1,5,8,9,2)


