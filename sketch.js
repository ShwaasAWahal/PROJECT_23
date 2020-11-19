var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redZone_1,redZone_2,redZone_3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	
	redZone_1 = Bodies.rectangle(width/2,655,200,10,{isStatic:true})
	World.add(world,redZone_1)

	redZone_2 = Bodies.rectangle(290,610,20,100,{isStatic:true})
	World.add(world,redZone_2)

	redZone_3 = Bodies.rectangle(510,610,100,20,{isStatic:true})
	World.add(world,redZone_3)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(redZone_1.position.x,redZone_1.position.y,200,10)
  rect(redZone_2.position.x,redZone_2.position.y,20,100)
  rect(redZone_3.position.x,redZone_3.position.y,20,100)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false)
  }
}



