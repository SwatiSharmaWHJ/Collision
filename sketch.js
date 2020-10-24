
var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
 fixedrect=createSprite(200,200,100,80) ;
 fixedrect.shapeColor="green";
 movingrect=createSprite(300,250,200,100);
 movingrect.shapeColor="green";
}

function draw() {
  background("black"); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2)
{

  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
}
else{fixedrect.shapeColor="green";
movingrect.shapeColor="green";

}

  drawSprites();
}