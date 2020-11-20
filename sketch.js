var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var score=0;
var PLAY=1;
var End=0;
var gameState=PLAY;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400) 
monkey=createSprite(50,300,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(200,330,400,10);
 FoodGroup=new Group()
  obstacleGroup=new Group();
}


function draw() {
background("white")
  monkey.collide(ground)
  bananas();
  Obstacles();
  monkey.velocityY = monkey.velocityY + 0.8  

  text("score:"+score,10,30);
 if(gameState===PLAY){
    
  if(ground.x<0){
    ground.x=width/2
  }
  if(keyDown("SPACE")&&monkey.y>=294.3){
    monkey.velocityY=-14
  }
   score = score + Math.round(getFrameRate()/60);
   if(FoodGroup.isTouching(monkey)){
     FoodGroup.destroyEach();
     
   }
   if(obstacleGroup.isTouching(monkey)){
     monkey.scale=monkey.scale-0.01
     gameState=End
   }
 }
  
 if(gameState==End){
   monkey.velocityY=0;
   FoodGroup.setVelocityXEach(0);
   obstacleGroup.setVelocityXEach(0);
   monkey.destroy();
   fill("black")
   text("Game Over",200,200)
 }

  drawSprites();
  
}









function bananas(){
 if(frameCount%80==0){
   banana=createSprite(400,200,20,20);
   banana.addImage(bananaImage);
   banana.Y=Math.round(random(120,200));
   banana.velocityX=-4;
   banana.scale=0.1;
   banana.lifetime=150;
  FoodGroup.add(banana)
 }
} 



function Obstacles(){
 if(frameCount%300==0){
  
  obstacles=createSprite(400,308,20,20);
  obstacles.addImage(obstaceImage);
  obstacles.velocityX=-7;
  obstacles.scale=0.1;
  obstacles.lifetime=150;
  obstacleGroup.add(obstacles)
 }
  
  
  
  
  
}