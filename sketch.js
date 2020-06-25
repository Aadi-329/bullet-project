var bullet,wall
var speed,wieght,damage,thickness
function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 80, 40);
 thickness=random(22,83);
 wall=createSprite(1500,200,thickness,height/2);
 speed=random(223,321);
 wieght=random(30,52);
 bullet.velocityX=speed;


  
}

function draw() {
  
   
  background(255,255,255);

 
   //&& bullet.x-wall.x<bullet.width/2+wall.width/2 
  
  //&&wall.y-bullet.y<bullet.height/2+wall.height/2
  //&&bullet.y-wall.y<bullet.height/2+wall.height/2
 if(istouching(bullet,wall))
  {
bullet.velocityX=0;
damage=0.5*wieght*speed*speed/(thickness*thickness*thickness);
if(damage<10)
{
  
  wall.shapeColor=color(0,255,0)
}
if(damage>10){

  wall.shapeColor=color(255,0,0)}

}  
 
  drawSprites();
}
function istouching(object1,object2){
  object1RightEdge=object1.x+object1.width;
  object2Leftedge=object2.x;
  if(object1RightEdge>+object2Leftedge){return true }
  else{return false};
  }