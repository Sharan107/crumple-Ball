
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	crumpleBall= new Paper(200,600,10,10);
	crumpleBall.shapecolor="pink";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
crumpleBall.display();

  drawSprites();
 
}



