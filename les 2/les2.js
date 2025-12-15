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

for(let i = 1; i < 500; i++){
    Ball(Math.random()*width,Math.random()*height,10,RandomColor());
}
