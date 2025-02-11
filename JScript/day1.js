 
//function 
function mysum(p,q)
{
    return p+q;
}
console.log(mysum(98,1))

//method 2 arrow function
const sum=(c,d)=>{
    return c+d;

}
console.log(sum(8,12))
 const my=()=>
 {
    console.log("Hellyyyooo");
 }
 my()

 // print marks of object class
 const marks={
    Harry:9,
    Akhila :99,
    Anu:90,
    Sindu:88

 }
 // key - value - syntax
 //Object.keys(marks)[i] -> gives key
 //marks[Object.keys(marks)[i]] -> give val
for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of "+Object.keys(marks)[i] + " is " +marks[Object.keys(marks)[i]])
}
// for in loops .. key gives key values
for(let key in marks )
{
    console.log("The marks of "+key +" is "+marks[key])
}

//replicate -alt+shift+bottom

//Using template literalls 
// backtics print exact words , use dollar sign to print value
let boy1='Manoj'
let boy2='Prakash'
let senti=`boy1 likes boy2`
console.log(senti)

//val printing using dollar
//template literals can insert variable direactly -> string interpolation
let senti2=`${boy1} likes ${boy2}`
console.log(senti2)

 
//(template literal) backtics ke andhar kuch bhi pakdadho vo print krlega yani single ya double quotes 
let str=`My name is "Akhila"`
console.log(str)

//escape vala skips the quote u wanna ignore \(backslash)
let newstr='Benny\'Chancy'
console.log(newstr)
console.log(newstr.length)
//  \n   new line 
//  \r   carriage return 
//  \t  new tab

// note that .length is property and .toUppercase() is a method 
console.log(newstr.toUpperCase())
console.log(newstr.toLowerCase())
let namee='AkhilaKNair'
console.log(namee.slice(2,5))//yani from 2 se 4 thak only 
console.log(namee.slice(5))// from 5 to end 
console.log(namee.replace('Akhila','Anaswara'))


//concatenation 
let akku='Akhila'
let frnd='Mable'
//here in concat u can also use + 
console.log(akku.concat(' is friend of ',frnd))

//.trim removes whitespaces 
let spacy="        DjangoDuckyyys      "
console.log(spacy)
console.log(spacy.trim())

let n='Akhila'
console.log(n[2])//prints h
for(i in n)
{
    console.log(n[i])
}

let naam='Shivi'+'Anu'
console.log(naam)//prints shivianu
// Strings are IMMUTABLE , U cant change it but can replace and modify and return a new string but cant change original one 
// aap ek string ka char kko change nhi kar skte kbhi 
// like naam[3]='k'  ; yani naam k 3 rd char ko update nhi krpaoge 


// .includes
const sent='A fox lives in the jungle in darks of wood'
const word ='fox'
console.log(sent.includes(word) ) //returns true ya false 
console.log(`The word ${word} ${sent.includes(word) ? ' is ' :' is  not '} in the text`)

//taking amount from string 
let mystr='Please give me rs 100'
let value=Number.parseInt(mystr.slice(18));
console.log(value)
console.log(typeof value)


//Arrays are objects
// u can put any data type in arrays
let myarr=['Mango','Apple','Cherry',true,12]
console.log(myarr)//prints it ['Mango', 'Apple', 'Cherry' ,true,12]
console.log(myarr[3])//gives true else gives undefined if out of bound is given 
console.log(myarr.length)//5 

//adding new value to the array
myarr[5]='Sreeja'
console.log(myarr)//adds sreeja
// u can also change an existing value 
myarr[4]=56

// some array methods 

//toString 
let newarr=[2,9,5,7]
let g=newarr.toString()// u should store in g 
console.log(g)// now this arr is a string 


//join method -sare array elements ke  last me  join krtha he 
let k=[1,3,5,7,9]
let f=k.join('*')
console.log(k)//original
console.log(f)//1*3*5*7*9

//pop element out from end 
let r=k.pop()
console.log(k)//9 is popped from end 
console.log(k,r)//dikabhi dega kki abh kya h k me aur kya return hua he 

//add element at end 
k.push('G20 Summit')
console.log(k)


//agar array ke samne se remove krna ho kuch tho 
let elimin=k.shift()//this gives 1 becoz first element in arr is 1 
console.log(k,elimin)//array se bi remove krti he usko , also returns length of curr array

//agar saamne kuch add krnaa ho tho 
k.unshift('Yamuna')
console.log(k)//and return curr length of array


//summary :: 
//pop ,shift removes and return curr length
//unshift , push adds at beginning of array and curr length
//diff is that pop and push end me work krta h aur shift aur unshift begining me 

//-----------------------------------------

//IMPORTANT

//delete operator se array ka length affect nhi hothi
let dig=[1,2,3,4,5,6,7,8]
delete dig[4]
console.log(dig)//ye 4th digit ke vha missing dikatha h par hattatha nhi h vha se and length will remain same 8 only 

//concat to join many arrays 
let num1=[1,2,3,4,5]
let num2 =[6,7,8,9,0]

let res=num1.concat(num2)
console.log(res)

//joining 3 arrays 
let arr1=[1,1,1,1]
let arr2=[0,0,0,0]
let arr3=[4,4,4,4]
let arr4=arr1.concat(arr2,arr3)
console.log(arr4)

//  SORT method sort alphabetically 
//IMP >>>>>>>> aur SORT method original array kko change kr detha he after sorting 
let alpha=[1000,15,9,3,33,88889,39873,6,7]
alpha.sort()
console.log(alpha)
//phle 1 se shuru hone valo kko 1,100,1345...and then 2 se shuru valo kko then with 3 then 4 ...and so on
//[1000, 15, 3, 33, 39873, 6, 7,88889 ,9]


//To compare in ascending order write function
const compare=(w,z)=>
{
      return w-z;//for desc do z-w
}
alpha.sort(compare)
console.log(alpha)

//.reverse method reverses the array 

// splice and slice of array
// SPLICE -> returns deleted values and IT DOES REPLACES THE ARRAY :))))
let ori=[1,2,86,34,56,78,7]
ori.splice(2,4,3,4,5,6)
console.log(ori)//[1, 2, 3, 4, 5, 6, 9]

//splice me first parameter is kha se delete kru , 
//second parameter is kitne numbers delete kru ,
// bakki parameters are ki konse numbers se replace krti jau

//type 2 
let ori2=[0,1,2,3,4,5,6]
let del=ori2.splice(1,3,8,8,8,8)
console.log(ori2)
console.log(del)// 1,2,3 are been deleted
// SPLICE - creates new array and doesnt modifies the original one 
let q=[1,2,3,4,5,6,7]
let test=q.slice(2,4) //[3,4] note 5 is not removed 
console.log(q)//this will give same arr becoz doesnt modifies ori 
console.log(test)//this will give 3,4

//objects 
const a2=
{
    class:"science",
    section :1 ,
     hobby:"dance"

}
//adding 
a2['Read']="No"
a2['Music']="Yes"
console.log(a2)
a2['class']="Arts"
console.log(a2)
//accessing 
console.log(a2["hobby"])//dance
console.log(a2.hobby)//dance







