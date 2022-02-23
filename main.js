x = 0;
y = 0;
drawcircle = "";
drawrect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function starts(){
    document.getElementById("status").innerHTML = "System Is Listening Please Speak";
    Recognition.start();

}
Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech Has Been Recognized as- "+content;
    if(content=="circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started Drawing Circle";
        drawcircle = "set";

    }
    if(content=="rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started Drawing Rectangle";
        drawrect = "set";

    }

}
function setup(){
    canvas = createCanvas(900,600);

}
function draw(){
    if(drawcircle=="set"){
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle Is Drawn";
        drawcircle = "";

    }
    if(drawrect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn";
        drawrect = "";

    }
}