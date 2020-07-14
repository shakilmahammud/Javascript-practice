var marks =[45,81,63,100,56,98,35,23,120,80,5];
var max=marks[0];
for(var i=0;i< marks.length;i++){
    var element= marks[i];
    if(element>max){
        max =element;
    }
}
console.log("Highest value is:",max);

//use Math.max method & find your max Array number

var arrayMax=Math.max(...marks);
console.log("Max Array Value is",arrayMax);
