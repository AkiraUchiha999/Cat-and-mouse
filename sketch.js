var cat,catAni,catImg1,catImg2,catImg3,catImg4
var gardenImg
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4

function preload() {
    //load the images here
    catImg1=loadAnimation("tomOne.png")
    catImg2=loadAnimation("tomTwo.png")
    catImg3=loadAnimation("tomThree.png")
    catImg4=loadAnimation("tomFour.png")
    mouseImg1=loadAnimation("jerryOne.png")
    mouseImg2=loadAnimation("jerryTwo.png")
    mouseImg3=loadAnimation("jerryThree.png")
    mouseImg4=loadAnimation("jerryFour.png")
    gardenImg=loadImage("garden.png")
}


function setup(){
    createCanvas(800,400);
    //create tom and jerry sprites here
    cat=createSprite(650,300)
    cat.addAnimation("tomOne",catImg1)
    cat.addAnimation("tomTwo",catImg2)
    cat.addAnimation("tomThree",catImg3)
    cat.addAnimation("tomFour",catImg4)
    cat.scale=0.15
    mouse=createSprite(150,300)
    mouse.addAnimation("jerryOne",mouseImg1)
    mouse.addAnimation("jerryTwo",mouseImg2)
    mouse.addAnimation("jerryThree",mouseImg3)
    mouse.addAnimation("jerryFour",mouseImg4)
    mouse.scale=0.1
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

if (cat.x-mouse.x<(cat.width-mouse.width)/2){
   cat .velocityX=0
   mouse.addAnimation("jerryFour",mouseImg4)
    mouse.changeAnimation("jerryFour")
cat .changeAnimation("tomFour",catImg4)
cat.addAnimation("tomFour",catImg4)
}

    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("tomTwo",catImg2,)
    cat.changeAnimation("tomTwo",catImg2)
    mouse.addAnimation("jerryThree",mouseImg3)
    mouse.changeAnimation("jerryThree",mouseImg3)
}
}



