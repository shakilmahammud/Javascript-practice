var name =["Ami","se","tmi","you","me","se","you"];
var uniqueName=[];

for(var i=0;i<name.length;i++){
    var index=uniqueName.indexOf(name[i]);
    if(index==-1){
        uniqueName.push(name[i]);
    }
}
console.log(uniqueName);
//use function Remove Duplicate Array 

function getArrayName(name){
    for(var i=0;i<name.length;i++){
        var index=uniqueName.indexOf(name[i]);
        if(index==-1){
            uniqueName.push(name[i]);
        }
    }
    return uniqueName;

}
var resultMainArray=getArrayName(name);
console.log("main member Array :", resultMainArray);