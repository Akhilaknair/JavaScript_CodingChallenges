
// get and set methods to set and get the class properties 

class Animal{
    constructor(name)
    {
        this.name=name;
        //return this._name;// even if u ignore this no problem but set get me underscore needed he 
    }

    fly()
    {
        alert('I m flying ')
    }
    get name()//name() :: get fucn ka name aur variable name same nhi ho skta islie underscore dalo for variable
    {
       return this._name;
       //return this._name;
    }

    set name(NewName)
    {
        this._name=NewName;
    }


}
let a =new Animal('wicky');

a.fly()
console.log(a.name)// gives Wicky
//console.log(a.name)// gives wicky

a.name="Jackyyy"
console.log(a.name)



/// instanceof method used to check if a object belong to that class or not 


let c=98

console.log(a instanceof Animal)//true

console.log(c instanceof Animal)//false 

// instanceof returns true if obj belongs to class or to any other class inheriting from it 

// eg
class Rabbit extends Animal
{
    eat()
    {
        console.log('eating');
    }
}

let b=new Rabbit();

console.log(b instanceof Animal)// this will give true as rabbit is inherited 


//////// PRACTICE QUESTIONS 

//1.
class Complex
{
    constructor(real,img)
    {
          this.real=real;
          this.img=img;
    }
    add(num)
    {
        this.real+=num.real;
        this.img+=num.img;
    }
    // get for real and img 
    get real()
    {
        return this._real;
    }
    get img()
    {
        return this._img;
    }

    // set for real and img 
set img(newImg)
{
    this._img=newImg;
}


set real(newReal)
{
    this._real=newReal;
}

}
let x =new Complex(4,6);
// -------------
// updating using set 

   x.real=3;
   x.img=7;
  // 5 8 .....earlier it was 6,7
// ----------
let y =new Complex(2,1);
x.add(y);
console.log(x.real,x.img);




//2.   overriding 
class Human
{
     constructor(name,fav)
     {
        this.name=name;
        this.fav=fav;
     }
     walk()
     {
        console.log(this.name+ "human is walking ")
     }
}
class Student extends Human{

       walk()
       {
        console.log(this.name+ " student is walking ")
       }
}


let s=new Student('Guccy','Bhindi');
s.walk()
// Guccy student is walking








