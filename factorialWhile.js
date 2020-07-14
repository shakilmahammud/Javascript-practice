 var i=1;
 var factorials=1;
 while(i<=5){
     factorials =factorials*i;
     //console.log(i,factorial);
     i++
 }
 console.log(factorials);

 //use function & while loop solve factorial mah

 function factorialMath(n){
    var i=1;
    var factorial=1;
    while(i<n){
        factorial=factorial*i;
        i++
    }
    return factorial;
}
var factorialResult= factorialMath(30);
console.log(factorialResult);

//use re