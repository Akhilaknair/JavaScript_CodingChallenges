

const days_el= document.getElementById("d");
const hours_el= document.getElementById("h");
const min_el= document.getElementById("m");
const sec_el= document.getElementById("s");



const newYear="1 Jan 2024";

function datey(){

const CurrDate=new Date();
const NewYearDate=new Date(newYear);
const diff=NewYearDate - CurrDate;

  const Totsec =  diff/1000;
  const days= Math.floor( Totsec/3600/24);
  const hours=Math.floor(Totsec/3600)%24;
  const mins=Math.floor(Totsec/60)%60;
  const secs=Math.floor(Totsec)%60;
  console.log(days,hours,mins,secs);


  days_el.innerHTML=days;
  
  hours_el.innerHTML=hours;
  min_el.innerHTML=format(mins);
  sec_el.innerHTML=format(secs);
    
}

datey();

function format(time)
{
    return time<10 ? `0${time}` : time;
}
setInterval(datey,1000)









