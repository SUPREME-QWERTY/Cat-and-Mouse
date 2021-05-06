var gardenPic;

var jerry,jerry1,jerry2,jerry3;

var tom,tom1,tom2,tom3;

function preload() {

    gardenPic = loadImage("images/garden.png");

    tom1 = loadAnimation("images/cat1.png");
    tom2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom3 = loadAnimation("images/cat4.png");

    jerry1 = loadAnimation("images/mouse1.png");
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry3 = loadAnimation("images/mouse4.png");

}

function setup(){

    createCanvas(1000,800);

    tom = createSprite(870,600);
    tom.addAnimation("wild",tom1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("squeak",jerry1);
    jerry.scale = 0.1;

}

function draw() {

    background(gardenPic);

    if(tom.x - jerry.x < (tom.width - jerry.width/2)){

      tom.velocityX = 0;
      tom.addAnimation("wildstop",tom3);
      tom.scale = 0.7;
      tom.changeAnimation("wildstop");

      jerry.addAnimation("squeakstop",jerry3);
      tom.scale = 0.1;
      jerry.changeAnimation("squeakstop");

    }
    
    drawSprites();

}


function keyPressed(){

 if(keyCode === 37){

    tom.velocityX = -5;
    tom.addAnimation("wildmoving",tom2);
    tom.changeAnimation("wildmoving");

    jerry.addAnimation("squeakscared",jerry2);
    jerry.frameDelay = 123456;
    jerry.changeAnimation("squeakscared");

 }

}
