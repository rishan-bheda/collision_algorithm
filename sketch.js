var fixedRectangle, movingRectangle

function setup() {
  createCanvas(800,400);

  movingRectangle = createSprite(200,200,50,50);
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;

  fixedRectangle = createSprite(100,100,50,50);
  fixedRectangle.shapeColor = "green";
  fixedRectangle.debug = true;


}

function draw() {
  background(0);  

  if(movingRectangle.x-fixedRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 &&
    fixedRectangle.x - movingRectangle.x < movingRectangle.width/2 + fixedRectangle.width/2 &&
    movingRectangle.y - fixedRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2 &&
    fixedRectangle.y - movingRectangle.y < movingRectangle.height/2 + fixedRectangle.height/2){

    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor = "red";


  }

  else{
    fixedRectangle.shapeColor = "green";
    movingRectangle.shapeColor = "green";
  }

  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;

  drawSprites();
}