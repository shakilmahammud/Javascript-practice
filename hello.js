console.log(121);
console.log("Good Boy");

//============Variable Declear ====== 

var bannaPrice = 12;
console.log(bannaPrice);
//=========variable Type check===========
console.log(typeof bannaPrice);

// string  type of variable & Type===========

var name ="Zuckerburg";
console.log(name);
console.log(typeof name);

// ========= boolean Type variavble & Type===========
var isHot = true;
var isRice=false;
console.log(isHot);
console.log(typeof isHot);

console.log(isRice);
console.log(typeof isRice);

// =============Js always Case sensitive

// variable name Declear Camel Case & meaniful Variable always Great.

var promise = "I promise I will work Hard to become a Programmer";
console.log(promise.toUpperCase());// UperCase Your Letter

console.log(promise.indexOf('will'));// position searching
console.log(promise.indexOf("hello"));// when index position word missing then print -1

console.log(promise.split(' '));// when you need word gap use this function split()

//number data type
var number1= 25;//integer 
var number2=25.5;//float number
console.log(number1+number2);//concatation

var number3= 35;
var number4="35.5";
var number5 ='25';
console.log(number4+number5);//parseFloat function used string Data convert to Number
number4= parseFloat(number4);
number5=parseFloat(number5);
console.log(number3+number5)

var number6=0.1;
var number7=0.2;
var total = number6+number7;
total = total.toFixed(1);//toFixed function used by floating poin value

console.log(total);
//===========Javascript  Mathematics operation=============

var price1 = 25;
var price2 = 65;
var Taka = 500;
var totalPrice=price1+price2;// js concctation
console.log(totalPrice);
 var Return=Taka-totalPrice;//js 
 console.log(Return);
  
console.log(price2*price1);// js Multiply

console.log(Taka/totalPrice);//js division

console.log(Taka%totalPrice);//js 
Taka++;//increase one
console.log(Taka);
totalPrice--;// decrease
console.log(totalPrice);
