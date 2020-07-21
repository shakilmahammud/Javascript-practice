var speech = ["I'm a Good Person. I'm also Dedicated person " ];
var cout=0;
for (var i=0; i<speech.length;i++){
    var char=speech[i];
    if(char==" " && speech[i-1] !=" "){
        cout++;
    }
}
console.log(cout);

//use function

function getCoutWord(speech){
    var cout=0;
    for (var i=0; i<speech.length;i++){
        var char=speech[i];
        if(char==" " && speech[i-1] !=" "){
            cout++;
        }
    }
    return cout;
}
var resultWord=getCoutWord(speech);
console.log("Total Word:=",resultWord);