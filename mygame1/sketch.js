var chocobar,donut1, donut2, cookie, icecream,croissant,
cupcake,carrot, beet, broccoli, cabbage, cucumber,avacodo,germ1,germ2,germ3,bowl,chocobarGroup

var score = 0 

var chocobarImg, donut1Img, donut2Img, cookieImg, icecreamImg,croissantImg,
cupcakeImg,carrotImg, beetImg, broccoliImg, cabbageImg, cucumberImg,avacodoImg,germ1Img,germ2Img,germ3Img,bowlImg



function preload(){
  chocobarImg = loadImage("images/chocobar.png");
  donut1Img = loadImage("images/donut.png");
  donut2Img = loadImage("images/donut2.png");
  cookieImg = loadImage("images/cookie.png");
  icecreamImg = loadImage("images/face_cone.png");
  croissantImg = loadImage("images/face_croissant.png");
  cupcakeImg = loadImage("images/face_cupcake.png");
  carrotImg = loadImage("images/carrot_1.png");
  beetImg = loadImage("images/beet.png");
  broccoliImg = loadImage("images/broccoli.png");
  cabbageImg = loadImage("images/cabbage.png");
  cucumberImg = loadImage("images/cucumber.png");
  avacodoImg = loadImage("images/avocado.png");
  germ1Img = loadImage("images/germ1.png");
  germ2Img = loadImage("images/germ2.png");
  germ3Img = loadImage("images/germ3.png");
  bowlImg = loadImage("images/bowl.png");
  
}
function setup() {
  createCanvas(1800,520);

  bowl = createSprite(350,400,50,50);
  bowl.addImage(bowlImg);
  bowl.scale = 0.3;

  chocobarGroup = createGroup();

}

function draw() {
  background("beige");  
  drawSprites();
text("score:  " +score, 150, 100);

  if(keyDown("RIGHT")){
    bowl.velocityX = 9;  
  }

  if(keyDown("LEFT")){
   bowl.velocityX = -9;
  }
  if(keyWentUp("LEFT")){
    bowl.velocityX = 0;
}
if(keyWentUp("RIGHT")){
  bowl.velocityX = 0;

   }
   if(bowl.isTouching(chocobarGroup)){
     console.log("hi welcome to my game");
     score = score+10
     chocobarGroup.destroyEach();
   }
   Spawn();
  }


  function Spawn(){
  if(frameCount % 60 === 0){
  chocobar = createSprite(400, 10, 50, 50);
  chocobar.addImage(chocobarImg);
  chocobar.scale = 0.2;

  chocobar.velocityY = 5

  chocobar.x = Math.round(random(10,1000));

  chocobarGroup.add(chocobar);

  

  }
  


  }