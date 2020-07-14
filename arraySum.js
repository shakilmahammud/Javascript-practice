var number=[45,81,63,100,56,98,35,23,120,80,5];
var sum=0;
for(var i=0; i<number.length;i++){
    sum =sum+number[i];
}
console.log("Total of the number:",sum)

//use funtion calculate array sum

function getArraySum(number){
    var sum=0;
    for(var i=0; i<number.length;i++){
        sum =sum+number[i];
    }
    return sum;
}
var result=getArraySum([20,30,5,45,80,90,300,600]);

console.log("Array Total Sum Number:",result);

