// oops can be done with a function programming 
// data in form of field (property)and code in form of procedure(method)
// can create an entity sharing a common method or property 
// 4 pillars 
// abstraction , encapsulation , inheritance , polymorphism 
// abstraction :: hiding of internal details .. just call funcn 
// encapsulation :: using diff things to make a single entity
// inheritance :: adding new feature to existing one to create new entity 
// polymorphism :: 1 cheez , alag alag form ... smartphone can be used as a phone,camera , note taking app


// js object have a special proprty called prototype thats   either null or references another object
// there are methods in a prototype
let a={  // running constructor of a 
    name:"Harry",
    color:'red'
}

// >>>>>>>>>>>>>>>> PROTOTYPAL INHERITANCE ::
// when we try to read property from a prototype and its missing in object then js automatically takes it from prototype ...its called as prototypal inheritance 

// we can set prototype by setting _ _proto _ _
// if u want to add some properties or methods to a object 
// then u do    .__proto__  to add prototype

// eg 
// u have a class c
let c={
    name:'Horse',
    color:'Black',
}

let r={
    run: ()=>
    {
        alert("run")
    }
}

 // setting a prototype 

c.__proto__ =r //if u skip this then it will give error becoz run is not defined in c
c.run()


////// if a method called is missing in its object description then only it will search in its prototype 
//..else if that method is already found in object itself then will not  search in prototypes 

let cls={
    name:'Bull',
    color:'Black',
    speed: ()=>
    {
        alert("Speeed I am alredy here!!")
    }
}

let spd={
    speed: ()=>
    {
        alert("Speeed !!")
    }
}




cls.__proto__=spd
cls.speed()


// >>>>>>>>  We can form a chain of prototypes (prototypes ke bhi prototypes)

let fruits={
    name:'Berry',
    color:'Blue',
    sweet: ()=>
    {
        alert("Sweety!!")
    }
}



let p={ // p is a proto of fruits
    sweet: ()=>
    {
        alert("Sweetyyyy but will not run :)!!")
    }
}

// create another proto for p
p.__proto__={
    
    state :'Kerala'
}


fruits.__proto__=p
fruits.sweet()


// now do call proto of p from fruits class 
console.log(fruits.state) // gives kerala


//////  >>>>>>>>>>>>>>>>>>>>      classes and Objects 
//creating object using template  and object is an entity created from that class

// modelling a class
class Rail{
    submit()
    {
        alert(this.name+ ' Submittetd of age '+this.age +' travelling to '+ this.place)
    }
    cancel()
    {
        alert(this.name+' Cancelled of age '+this.age+' travelling to '+ this.place)
        //also set place as 0
        this.place=null
    }

    fillName(aname,place)
    {
        this.name=aname
        
        this.place=place//u can set same name too
    }
    Fillage(a)
    {
        this.age=a
    }

}


let Harry=new Rail()

// setting new properties for a class through method
Harry.fillName('HarryHodge','delhi')
Harry.Fillage('19')


Harry.submit()
Harry.cancel()








//////>>>>>>> u can create multiple obj of same class 

// took 2 forms
let Manu1=new Rail()
let Manu2=new Rail()

// filled 2 forms separately
Manu1.fillName('Maneesh','Mumbai')
Manu2.fillName('Maneesh','Gujarat')
Manu1.Fillage('30')
Manu2.Fillage('30')

Manu1.submit()  //mumbai is submitted
Manu2.submit()  //Gujarat is submitted
Manu1.cancel()  //Gujarat is canceleld


//////////   >>>>>>> CONSTRUCTOR 
// each time an object of the class is created , constructer will always be called .......  we dont hav to call it specifically ..its called by default 

class Exam{



// bychance we didnt fill name and called submit and cancel method then it would have been undefinde
// fill method vala kaam kko constr me niptao



    constructor(aname,age){
             
        console.log('constr called'+aname+age)

        this.name=aname
        this.age=age
    }



    submit()
    {
        alert(this.name+ ' Submittetd exam of age ' + this.age )
    }
    cancel()
    {
        alert(this.name+' Cancelled exam  of age ' + this.age )
    }

    // fillName(aname,age)
    // {
    //     this.name=aname
        
    //     this.age=age
    // }
   

}


let anu=new Exam('Anu Sharma',16)
let maya=new Exam('Ridhi Gupta',18)
anu.submit()
maya.submit()














