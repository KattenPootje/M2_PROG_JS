const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

function Ball(x,y,r,color){
    g.strokeStyle = "Black";
    g.fillStyle = color;

    g.beginPath();
    g.arc(x, y, r, 0, 2 * Math.PI);
    g.closePath();
    g.fill();
    g.stroke(); 
}

function RandomColor(){
    let hue = Math.random() * 360;
    let saturation = 100;
    let light = 50;

    let color = `hsl(${hue}, ${saturation}% , ${light}%)`;
    return color;

}

height=600
width=800

g.strokeStyle = "Black";
g.fillStyle = "rgb(25 0 60 / 100%)";
g.fillRect(0,0, width,height);
g.fillStyle = "rgb(255 255 255 / 100%)";
g.fillRect(0,height/1.1, width,height);

for(let i = 1; i < 300; i++){
    Ball(Math.random()*width,   Math.random()*height ,4, `hsl(${0}, ${0}% , ${255}%)`);
}

g.strokeStyle = "Black";
g.fillStyle = "Green"

g.beginPath();
g.moveTo(width/2,100);
g.lineTo(width/2-200, height-100);
g.lineTo(width/2+200, height-100);
g.stroke();
g.fill();

g.fillStyle = "Brown"

g.beginPath();
g.moveTo(width/2-15, height-100);
g.lineTo(width/2-15, height);
g.lineTo(width/2+15, height);
g.lineTo(width/2+15, height-100);
g.stroke();
g.fill();

for(let i = 1; i < 150; i++){
    randomNumber = Math.random()
    Ball(Math.random()*(width/2*(1-randomNumber))+(400*randomNumber)+(200*(1-randomNumber)),   (height-100)-((height-100)-100)*randomNumber ,5,RandomColor());
}

g.fillStyle = "White"
g.font = "50px Arial";
g.fillText("merry christmas ya filthy animal",10,80);
