var tom , jerry;
var tomImg1,tomImg2,tomImg4;
var ratImg1,ratImg2,ratImg4;
var bg;
function preload() {

    tomImg1=loadImage("images/tomOne.png");
    tomImg2=loadImage("images/tomTwo.png","images/tomThree.png");
    tomImg4=loadImage("images/tomFour.png");
    
    ratImg1=loadImage("images/jerryOne.png");
    ratImg2=loadImage("images/jerryTwo.png","images/jerryThree.png");
    ratImg4=loadImage("images/jerryFour.png");

    bg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
   
tom=createSprite(870,600);
tom.addAnimation("evil",tomImg1);
tom.scale=0.2;

jerry=createSprite(200,600)
jerry.addAnimation("mischeif",ratImg1);
jerry.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x<(tom.width-jerry.width)/2){
tom.velocityX=0;
tom.addAnimation("voldemort",tomImg4);
tom.x=30;
tom.scale=0.2
tom.changeAnimation("voldemort")

jerry.addAnimation("managed",ratImg4);
jerry.scale=0.15;
jerry.changeAnimation("managed");
}



    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX= -5;
    tom.addAnimation("catRunning",tomImg2);
    tom.changeAnimation("catRunning");

    jerry.addAnimation("bad",ratImg2);
    jerry.changeAnimation("bad");
    jerry.frameDelay=25;

}


   

//text(mouseX+','+mouseY, 10, 45);
}
