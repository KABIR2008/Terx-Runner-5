var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstalce
var cloud, cloudsGroup, cloudImage;
var obstalce1,obstalce2,obstalce3,obstalce4,obstalce5,obstalce6
var score = 0

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");

  obstalce1 = loadImage("obstacle1.png");
  obstalce2 = loadImage("obstacle2.png");
  obstalce3 = loadImage("obstacle3.png");
  obstalce4 = loadImage("obstacle4.png");
  obstalce5 = loadImage("obstacle5.png");
  obstalce6 = loadImage("obstacle6.png");

  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("SCORE :" + score, 500,50)
  score = score+ Math.round(getFrameRate()/60)
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstalces();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 200
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstalces(){
  if(frameCount % 80 === 0){
    obstalce = createSprite(600,165,20,30)
    obstalce.velocityX = -3
    var num = Math.round(random(1,6))
    switch(num){
      case 1 : obstalce.addImage(obstalce1)
      break;
      case 2 : obstalce.addImage(obstalce2)
      break;
      case 3 : obstalce.addImage(obstalce3)
      break;
      case 4 : obstalce.addImage(obstalce4)
      break;
      case 5 : obstalce.addImage(obstalce5)
      break;
      case 6 : obstalce.addImage(obstalce6)
      break;
      default: break
    }
    obstalce.scale = 0.5
    obstalce.lifetime = 200
  }
}