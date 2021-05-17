var bg,bgImage;
var ninja,ninjaImg;
var ground;
function preload(){
  bgImage=loadImage("jungle.jpg");
  ninjaImg=loadAnimation("Run0.png","Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png","Run7.png","Run8.png","Run9.png");
}
function setup() {
  createCanvas(1500,750);
  bg=createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImage);
  bg.scale=0.2;
  bg.velocityX=-5;
  ninja=createSprite(100,500,20,20);
  ninja.addAnimation("run",ninjaImg);
  ninja.scale=0.5;
  ninja.velocityX=3;
  ground=createSprite(650,720,2600,10);
  ground.velocityX=-3;
  ground.visible=false;
  //bg.x=bg.width/2;
}

function draw() {
  background(255,255,255);
  if(bg.x<350){
    bg.x=650;
  }  
  if(ground.x<0){
    ground.x=650;
  }
  ninja.collide(ground);
  if(keyDown("space")){
    ninja.velocityY=-10;
  }
  ninja.velocityY=ninja.velocityY+1;
  drawSprites();
}