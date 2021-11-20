var sea;
var ship;

function preload(){
 sea1=loadImage("sea.png");
 ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(800,400);

  sea = createSprite(200,180,400,20)
  sea.addImage("1",sea1);
  sea.scale = 0.4
  ship = createSprite(50,180,20,20)
  ship.addAnimation("2",ship1);
  ship.scale = 0.3
  
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  drawSprites();
}