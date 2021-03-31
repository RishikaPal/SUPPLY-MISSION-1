var helecopterIMG,helecopterSprite,packageSprite,packageIMG;
var packagebody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload() {
    helecopterIMG=loadImage("helecopter.png")
    packageIMG=loadImage("package.png")
}
function setup() {
    createCanvas(800,700);
    rectMode(CENTER);
    packageSprite=createSprite(width/2,80,10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2
    helecopterSprite=createSprite(width/2,200,10,10);
    helecopterSprit.addImage(helecopterIMG)
    helecopterSprite.scale=0.6
    groundSprite=createSprite(width/2,200,10,10);
    groundSprite.shapeColour=colour(225)
    engine=Engine.create();
    World=engine.world;
   packagebody=Bodies.circle(width/2,200,5,{restution:04,isStatic:true});
   world.add(world,packagebody)
  ground=Bodies.rectangle(width/2,650,width,10,{isStatic:true});
   world.add(world,ground);
   Engine.run(engine);
}
function draw() {
    rectMode(CENTER);
    background(0);
    packageSprite.x=packagebody.position.x
    packageSprite.y=packagebody.position.y
    drawSprites();
}
function keyPressed() {
    if(keyCode===down_ARROW){
        Matter.Body.setStatic(packagebody,false);
    }
}