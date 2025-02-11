//insertAjacent functions take two strings as parameter
let mydiv=document.getElementsByTagName('div')[0]


mydiv.insertAdjacentHTML( 'afterend' , '<div class="first">  afterend  </div>')//outside of selected element at start
mydiv.insertAdjacentHTML('beforeend','<div class="first">beforeend</div>')//inside  of selected element
mydiv.insertAdjacentHTML('beforebegin','<div class="first"> beforebegin </div>')//outside of selected element at end
mydiv.insertAdjacentHTML('afterbegin','<div class="first">afterbegin</div>')//inside  of selected element


//.remove() call krdho to remove something from ur 
let x=document.getElementsByTagName('section')[0]
x.remove()//removes section element from website

//.className  to get all className of an elemnt using ID or to replace class name of an element 
two.className //do enter to get its class names 
//in browser write id.className 
// eg. two.className ..... note that two is id of a div and .className replaces (updates)the whole string of classes that existed before 
two.className='blue'// changes red class of div with id two to blue color , hence u can update class by this too
two.className='blue white-text'//assigning multiple classes  to div with id as two


// >>>>>>>>>>>>>>  class Lists ke 4 functions 

//id.classList  give u the list of selected element
// eg. two.classList

//to add class to an existing classList
four.classList.add('white-text')
// u can also remove a class from  a classList
three.classList.remove('blue')//removing class blue  , only green is visible 

//id.classList.toggle('className') se class kko add aur hatta skte h....on h tho off krtha h aur off h tho on krtha h
three.classList.toggle('yellow')//iss line kko hattaoghe tho yellow clr chla jayega (phle on tha ye class but toggle se off hojayega islie)

//id.classList.contains('className') returns true or false 
three.classList.contains('four')//gives true











