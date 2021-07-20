var iss, spaceCraft, bg, issbg, issImg
var hasDocked=false
var scImg1, scImg2, scImg3, scImg4

function preload(){
  issImg=loadImage("iss.png")
  bg=loadImage("spacebg.jpg")
  scImg1=loadImage("spacecraft1.png")
  scImg2=loadImage("spacecraft2.png")
  scImg3=loadImage("spacecraft3.png")
  scImg4=loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(600,350);

  iss=createSprite(285,100);
  iss.addImage(issImg)
  iss.scale=0.35

  spaceCraft=createSprite(260,240,3,3);
  spaceCraft.addImage(scImg1)
  spaceCraft.scale=0.0911
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1)
  
  if(keyDown("UP_ARROW")){
    spaceCraft.y=spaceCraft.y-2
  }

  if(keyDown("DOWN_ARROW")){
    spaceCraft.addImage(scImg2)
  }

  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(scImg4)
    spaceCraft.y=spaceCraft.y-2
  }

  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(scImg3)
    spaceCraft.y=spaceCraft.y-2
  }
  }
  if(spaceCraft.y<144){
    hasDocked=true
    textSize(25)
    fill("white")
    text("Docking Succesful",170,300)
  }
  drawSprites();
}

//spaceCraft.y<=(iss.y+70) && spaceCraft.x<=(iss.x-10)