var character,characterImg,characterImg2,characterImg3
var ground,groundImg,invisibleGround,groundImg2,groundImg3,groundImg4
var coins,coinsImg,coinsGrp
var coins2,coinsImg2,coinsGrp2
var coins3,coinsImg3,coinsGrp3
var jumpImg,jump

function preload(){
characterImg=loadAnimation("running1.png","running2.png","running3.png")
characterImg2=loadAnimation("running4.png","running5.png","running6.png")
characterImg3=loadAnimation("running7.png","running8.png","running9.png")

jumpImg=loadAnimation("running3.png")

groundImg=loadImage("ground.png")
groundImg2=loadImage("ground2.png")
groundImg3=loadImage("ground3.png")
groundImg4=loadImage("ground4.jpg")

coinsImg=loadImage
}
function setup() {
  createCanvas(1000,500);
  ground=createSprite(400,280,800,20)
  ground.addImage("ground1",groundImg)
  ground.addImage("ground2",groundImg2)
  ground.addImage("ground3",groundImg3)
  ground.addImage("ground4",groundImg4)
  ground.scale=0.65
  ground.velocityX=-3

  character=createSprite(80, 350, 50, 50);
  character.addAnimation("character1",characterImg)
  character.addAnimation("character2",characterImg2)
  character.addAnimation("jump",jumpImg)
  character.addAnimation("character3",characterImg3)
  character.scale=0.4
  
  invisibleGround=createSprite(400,450,800,20)
  invisibleGround.visible=false
}

function draw() {
  background("yellow");  

  if(ground.x<0){
    ground.x=ground.width/2
  }

  if(keyDown("space")){
    character.velocityY=-4
  }
  character.velocityY=character.velocityY+0.1

  character.collide(invisibleGround)

  if(frameCount%100===0){
    var rand=Math.round(random(1,3))
    switch (rand){
      case 1:ground.changeImage("ground2",groundImg2)
      ground.scale=1.1
      character.y=380
      invisibleGround.y=470
      break;
      case 2:ground.changeImage("ground3",groundImg3)
      ground.scale=1.05
      invisibleGround.y=470
      character.y=380
      break;
      case 3:ground.changeImage("ground4",groundImg4)
      ground.scale=2.09
      ground.y=250
      invisibleGround.y=450
      character.y=330
      break;
    }

  }
  drawSprites();
}

/*function spawnCoins(){

}*/