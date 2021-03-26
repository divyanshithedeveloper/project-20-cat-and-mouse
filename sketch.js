var garden,cat,mouse
var gardenImage,catImage,mouseImage,mouse_dancing,cat_running,mouse_stopping,cat_standing



function preload(){
 gardenImage=loadImage("garden.png") 
 mouseImage=loadImage("mouse1.png")
catImage=loadImage("cat1.png") 
mouse_dancing=loadAnimation("mouse2.png","mouse3.png")
cat_running=loadAnimation("cat2.png","cat3.png") 
mouse_stopping=loadAnimation("mouse4.png")
cat_standing=loadAnimation("cat4.png")  
}
function setup() {
createCanvas(600,600);
garden=createSprite(250,250,10,80)
garden.addImage(gardenImage)
  garden.scale=(1)
  
 mouse=createSprite(100,500,30,30)
  mouse.addAnimation("running", mouseImage);
  mouse.scale=(0.1)
  
  cat=createSprite(500,500,30,30)
  cat.addAnimation("chasing",catImage)
  cat.scale=(0.1)
  

  

}

function draw() {
  
  background("white");
  
  if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.addAnimation("standing",cat_standing)
    mouse.addAnimation("stopping",mouse_stopping)
    cat.velocityX=0
    
  }
  drawSprites()
}




function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("running",cat_running)
    cat.changeAnimation("running")
    mouse.addAnimation("chasing",mouse_dancing)
    mouse.changeAnimation("chasing")
  }
}




