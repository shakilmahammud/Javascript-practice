var myFiends=["robi","yeamin","shakib","Rahmim","Rayhan"];
console.log(myFiends);

console.log(myFiends[0]);

var position=myFiends.indexOf("robi");

console.log(position);

myFiends.push("Hello");//use push method
myFiends.push("HI");
console.log(myFiends);

myFiends.pop();
console.log(myFiends);

myFiends.shift();//use shift mehtod

myFiends.unshift(0);//use unshift method
console.log(myFiends);

//slice method use
var slicePart=myFiends.slice(3);//start index of 3 number arrya
console.log(slicePart);
var slicePart2=myFiends.slice(2,3);//start index of 2 num array end  4 number array
console.log(slicePart2);