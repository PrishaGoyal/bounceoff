var movingRectangle,fixedRectangle,object3;

function setup() {
  createCanvas(800,400);
  movingRectangle = createSprite(400, 200, 50, 50); 
  fixedRectangle = createSprite(300,100,70,70);
  object3= createSprite(200,90,180,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY; 
  movingRectangle.debug=true;
  fixedRectangle.debug =true;
 if(isTouching(movingRectangle,fixedRectangle)){
   movingRectangle.shapeColor="pink";
   fixedRectangle.shapeColor="red";  
 }
 else {
   movingRectangle.shapeColor="blue";
   fixedRectangle.shapeColor="blue";
 }
 if(isTouching(movingRectangle,object3)){
   movingRectangle.shapeColor="red"
   object3.shapeColor="green";
 }
 else {
   movingRectangle.shapeColor="blue";
   object3.shapeColor="blue";
 }
}

