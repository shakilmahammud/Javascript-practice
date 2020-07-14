const year=3566;
let remainder = year%4;

if (remainder==0){
    console.log("is a LipYar")
}
else{
    console.log("Your Year not a LeapYear");
}
//funcion use

function lipYear(year){
    var remainder=year%4; 
    if(remainder==0){
        return true;
    }
  else  {
        return false;
    }

}
const checkYear=lipYear();

console.log(checkYear);