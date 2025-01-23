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


// rest parameter
function fn(...x)
{   for(var i=0;i<x.length;i++)
    console.log(x[i]);
}
fn(1,5,8,9,2)