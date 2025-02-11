class Animal{

    constructor(name)
    {
        this.name=name// u can use Animal.capi() here but letting it as this.capi will throw error becoz capi is static ; inshort if u wanna access then access fucn only with class name 
    }
  
    run()
{
    alert('Animal'+ Animal.capi(this.name) + ' is running ')
}

     static capi(name)
    {
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }


}


let k=new Animal('jack')// u can use Animal.capi() here
 k.run()



 // static keyword used if u wanna put some fucn to ur class but didint want to give access to the objects of that class 

 // if u place static keyword for a fucn u cant call it for an object 
 // if u remove static keyword then it will not give u error 
//console.log( k.capi('jackighan'))//error  
//static methods are not availble for individual objects 
















