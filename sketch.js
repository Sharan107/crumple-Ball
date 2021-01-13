
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800,1000);

	engine = Engine.create();
	world = engine.world;

	crumpleBall= new Paper(250,800,20);
	
	Engine.run(engine);

}


function draw() {
  background(255,255,255);

crumpleBall.display();

keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	

}
