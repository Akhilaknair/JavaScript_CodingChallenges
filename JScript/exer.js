
let a=Math.random()*100
a=Number.parseInt(a)
let sc=0
let enter=0
while(enter!=a && sc<=100)
{
   enter=prompt("Guess bhai :)")
         sc++
           if(enter==a)
           {
            console.log('U won !! in just ${sc}  seconds ')
           }
           else if(enter <a && enter >0)
            {
                //67  34
                
                console.log('Guess Big')
            }
            else if(enter>a && enter <100)
            {
                console.log('Guess Small')
            }
            else 
            {
                console.log('Enter valid num na :(')
            }
}
