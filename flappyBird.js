//Grabbing canvas from HTML-
var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');

//loading images and sounds
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";


var fly = new Audio();
var score = new Audio();

fly.src = "sounds/fly.mp3";
score.src = "sounds/score.mp3";

//variables
var gap = 100
var constant = pipeNorth.height+gap

var bX = 10
var bY = 150

var gravity = 2.5;

var points = 0

//KeyPressing
document.addEventListener("keydown", moveUp)

function moveUp() {
  bY -=35
  fly.play()
}

//Pipe coords
var pipe = []
pipe[0] = {
  x : cvs.width,
  y : 0
}

//Drawing images
function draw() {
  ctx.drawImage(bg, 0, 0)
  
  for(var i = 0; i < pipe.length; i++) {
      ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y)
      ctx.drawImage(pipeSouth, pipe[i].x  , pipe[i].y + constant)
      
      pipe[i].x--;
    //decect death
    if (pipe[i].x===125) {
      pipe.push({
        x : cvs.width,
        y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
      })
    }
    if (bX+bird.width >= pipe[i].x 
        && bX <= pipe[i].x + pipeNorth.width 
        && (bY <= pipe[i].y + pipeNorth.height 
            || bY + bird.height>= pipe[i].y + constant 
            || bY + bird.height >= cvs.height -fg.height)) {
      location.reload()
    }    
    if(pipe[i].x == 5){
       points++;
       score.play();
       }
  }
  
  ctx.drawImage(fg, 0, cvs.height - fg.height)
  
  
  ctx.drawImage(bird, bX, bY)
  bY += gravity
  
  ctx.fillStyle = "#000" ;
  ctx.font = "20vp Verdana"
  ctx.fillText("Score : " + points,10, cvs.height-20)
  
  requestAnimationFrame(draw);
}
draw() 

