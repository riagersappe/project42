var bg,iss,issImg,spacecraft,spacecraftImg;
var hasDocked= false;

function preload(){
  bg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  spacecraftImg=loadImage("spacecraft1.png");
  spacecraftImg1=loadImage("spacecraft2.png");
  spacecraftImg3=loadImage("spacecraft3.png");
  spacecraftImg4=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  iss=createSprite(400,200);
  iss.addImage(issImg);
  iss.scale=0.5;

  spacecraft=createSprite(600,200);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale=0.2;
}

function draw() {
  background(bg);  
  spacecraft.addImage(spacecraftImg);
  if (!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
  }
  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2;

  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraftImg);

  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x=spacecraft.x+2;
    spacecraft.addImage(spacecraftImg3);

  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x=spacecraft.x-2;
    spacecraft.addImage(spacecraftImg4);

  }
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(15);
    fill("white")
    text("Docking Successful!",600,50)
  }
  drawSprites();
}