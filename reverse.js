var statement ="Hello I'm Alien Friend"

function reverseString(str){
    var reverse="";
    for(var i=0;i<str.length;i++){
        var char =str[i];
        reverse=char+reverse;
    }
   return reverse;
}
var forAlien=reverseString(statement);
console.log("reverse String:=",forAlien);