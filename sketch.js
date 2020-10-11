var ground;
var bananaImage, banana, bananaGr;
var obstacle_Img, obstacle, obstGr;
var back, backGroundImg;
var monkey, player_running;
var score = 0;
var gameState=play;
play=0;
end=1;
touching;
function preload() {
  backGroundImg = loadImage("jungle.jpg");
  obstacle_Img = loadImage("stone.png");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
}

function setup() {
  createCanvas(600, 200);
  touching=0;
  back = createSprite(600, 200);
  obstGr = createGroup();
  bananaGr = createGroup();
  back.addImage(backGroundImg);
  monkey = createSprite(50, 160);
  monkey.addAnimation("monks", player_running);
  monkey.scale = 0.1;
  ground = createSprite(300, 193, 600, 5);
  ground.visible = false;
  back.velocityX = 4;
}

function draw() {
  monkey.collide(ground);
  back.x = back.width / 2;
  switch (score) {
    case 10:
      monkey.scale = 0.12;
      break;
    case 20:
      monkey.scale = 0.14;
      break;
    case 30:
      monkey.scale = 0.16;
      break;
    case 40:
      monkey.scale = 0.18;
      break;
    default:
      break;
  }
  if (monkey.isTouching(bananaGr)) {
      score += 2;
      bananaGr.destroyEach();
    }
  food();
  obst();
  if(monkey.isTouching(obstGr)){
    touching++
  }
  if(touching===1){
    monkey.scale=0.1;
  }
  if(keyDown("space")){
    monkey.velocityY=-6;
  }
  monkey.velocityY+=0.9;
  drawSprites();
  fill("white");
  text("score: " + score, 500, 50);
}

 function food() {
   if (frameCount % 80 === 0) {
     banana = createSprite(600, random(0, 150));
     banana.addImage(bananaImage);
     banana.scale = 0.07;
     banana.velocityX = -4;
     banana.lifetime = 150;
     bananaGr.add(banana);
   }
 }

 function obst(){
   if(frameCount % 300 === 0){
     obstacle = createSprite(600,155);
     obstacle.scale = 0.15;
     obstacle.addImage(obstacle_Img);
     obstacle.velocityX = -4;
     obstacle.lifetime = 170;
     obstGr.add(obstacle);
   }
 }