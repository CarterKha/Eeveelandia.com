//Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen Twenty TwentyOne TwentyTwo

//VariableLand

var x = 0
var y = 0
var canvasWidth = 800
var canvasHeight = 800
var i = 0
//FuntionLand-CanvasSize

function setup() {
 createCanvas(canvasWidth, canvasHeight)
  makeBackground()
}

function makeBackground() {
  background(random(255), random(255), random(255))
}

//FunctionLand-Drawing

function draw() {
fill(random(255), random(255), random(255))
 
  ellipse(x, y, 20);
  x += 5
   
  textSize(32) 
  fill(0, 0, 0)
  text('ScoreBoard ' + i, 10, 200)
  
  let edgeX = x > canvasWidth
  if(edgeX) {
    y = y + 50
    x = 0
  }
  
  
  
  var edgeY = y > canvasHeight
  if(edgeY) {
 noLoop()
  }
 
  console.log('X -> ' + x + '. Y -> ' + y)
}

//MouseyLand

function mousePressed() {
 clear();
  makeBackground()
  fill(0,35,102)
 ellipse(mouseX , mouseY , 40) 
  
  var bottomBoundaryX = x - 20
  var topBoundaryX = x + 20
  var isNearX = (mouseX > bottomBoundaryX) && (mouseX < topBoundaryX)
  
  var bottomBoundaryY = y - 20
  var topBoundaryY =  y + 20
  var isNearY = (mouseY > bottomBoundaryY) && (mouseY < topBoundaryY)

if (isNearX && isNearY) {
   
  textSize(32)
  fill(0, 0, 0)
  text('+1 Points!', 10, 100)
  i += 1
}
  }

//dasfadsfdsadfdsafdsfxcZcXZCVZXdasafdsdasasAS
