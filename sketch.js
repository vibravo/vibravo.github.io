function setup(){
    createCanvas(500, 500);
    background(174, 196, 232);
    //go button
    buttonGo = createButton('Make some License Plates');
  buttonGo.position(40, 20);
  buttonGo.mousePressed(pressBut);
}
function pressBut() {
    background(174, 196, 232);   
    textStyle(BOLD);
    textSize(30);
    text("Some Possibilities:",40,100);
    textStyle(NORMAL);
    textSize(30);
    text(license(),40, 160);
    text(license(),40, 200);
    text(license(),40, 240);
    text(license(),40, 280);
}

function license(){
    var numberArray = [];
    for(var t = 0; t<3;t++){
        var randomNum1 = "";
                var x = Math.floor(Math.random()*(10));
                numberArray.push(x.toString());         
                        }
    var letterArray = [];
    var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        for(var h = 0; h<3;h++){
        var randomNum1 = "";
                var m = Math.floor(Math.random()*(alphabet.length));
                letterArray.push(alphabet[m]);          
                        }
    return (""+letterArray[0]+letterArray[1]+letterArray[2]+"-"+numberArray[0]+numberArray[1]+numberArray[2]);
}