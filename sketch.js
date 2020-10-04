var monkey , monkey_running;

var ground;

var banana ,bananaImage, obstacle, obstacleImage;

var FoodGroup, obstacleGroup;

var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup=createGroup();
  
}


function draw() {
  background("white");
  
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
  monkey.collide(ground);
  
 if(keyDown("space")&& monkey.y >= 314) {
    monkey.velocityY=-13;
  }

  monkey.velocityY = monkey.velocityY + 0.5;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  
  
  
  food();
  spawnObstacle();
  
  drawSprites();

  
}

function food() {
  if(World.frameCount%80===0){
    banana = createSprite(400,0,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.y = Math.round(random(120,200));
    banana.lifetime=100;
    FoodGroup.add(banana); 
  }

}

function spawnObstacle() {
  if(World.frameCount%300===0) {
    obstacle = createSprite(400,320,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-6;
    obstacle.lifetime=66;
  }
}






