//calculate fabinacci use loop
var fibo=[0,1];
for(var i =2; i<=10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
}
console.log(fibo);
//solve fabonacci use unction
 
function fibnacci(n){
    var fibo=[0,1];
    for(var i =2; i<=n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;
}
var fibonacciResult=fibnacci(12);

console.log(fibonacciResult);