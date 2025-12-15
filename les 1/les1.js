const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");

g.strokeStyle = "Green";
g.fillStyle = "Red"

g.moveTo(0,0);
g.lineTo(200, 200);
g.stroke();

g.rect(300, 100, 200, 200)
g.stroke();
g.fill();

g.moveTo(600,200);
g.lineTo(700, 0);
g.lineTo(800, 200);
g.lineTo(600, 200);
g.stroke();
g.fill();

g.moveTo(100,350);
g.lineTo(0, 450);
g.lineTo(50, 550);
g.lineTo(150, 550);
g.lineTo(200, 450);
g.lineTo(100,350);
g.stroke();
g.fill();