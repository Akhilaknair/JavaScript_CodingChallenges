// Inheritance using extends keyword 
// animal class m monkey obj have its own attrbutes 

class Animal
{
   constructor(name,color)
   {
    this.name=name
    this.color=color

   }

  run()
  {
    console.log(this.name +' is Running')
  }
  
  Bark()
  {
    console.log(this.name +' is barking')
  }

 

}


let bruno=new Animal('Bruno','brown')
 bruno.run()//Bruno is Running


// creating monkey class

class Monkey extends Animal
{
    eatsBanana()
    {
        console.log(this.name +'  eats banana')
    }
}

let Monku=new Monkey('Monku','yellow')
Monku.eatsBanana()// Monku  eats banana
Monku.run() // Monku is Running

//eatsBanana will not work for Bruno



//////// >>>>>>>>> OVERRIDING 

class Employee
{
    login()
    {
        console.log('Employee logged in')
    }
    logout()
    {
        console.log('Employee logged out')
    }
    reqLeaves(x)
    {
        console.log(`Employee requested for ${x} leaves ^ apprved`)
    }
}


// new extended class 
class manager extends Employee
{
    wantCoffee(c)
    {
        console.log(`Employee asked for ${c} coffees`)
    }

/////// overriding parent funcn
// yani parent vala update nhi dikkegi yha 
// yha update kr a hua dikegi

     reqLeaves(x)
   {
       console.log(`Employee requested for ${x + 6} leaves `)
   }


}





let e=new manager()
e.login()
e.reqLeaves(9) // ^approved nhi aya yha , jo actual parent m he 
  // OUTPUT :: Employee requested for 15 leaves 



/////   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> USING SUPER KEYWORD we can get access to the parent class Method 
///// par agr parent vala chahiye bina change hue then use super keywork

// new extended class 
class Analyst extends Employee
{
/// note agar aapne parent class se derive kia he tho super ki class ko call krna hi pdega 
    constructor()
    {
        super()// this is must
        // this keyword agar use krna ho tho vo aapko super ke neeche krna hoga
       console.log('Analyssts constructor')
    }


    wantCoffee(c)
    {
        console.log(`Analyst asked for ${c} coffees`)
    }

/////// overriding parent funcn  and using  super keyword
/// Any change in parent funcn will also reflect here
    reqLeaves(x)
   {
        super.reqLeaves(8) //calling parent class method
   }


}


let b=new Analyst()
b.reqLeaves(7)// analyst class se ham parent class ki funcn ko use kr rhe he 














