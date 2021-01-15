
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(500,450);

	crumpleBall= new Paper(200,417,50);

	dustbinBase= new Dustbin(700,434,230,15);
	dustbinWall= new Dustbin(580,385,15,100);
	dustbinWall2= new Dustbin(815,385,15,100);

	
	Engine.run(engine);

}


function draw() {
  background("black");

crumpleBall.display();
ground.display();
dustbinBase.display();
dustbinWall.display();
dustbinWall2.display();

keyPressed();

  drawSprites();

}

function keyPressed() {
	//write code here
	
   if(keyWentDown("UP_ARROW")){
     Body.applyForce(crumpleBall.body,crumpleBall.body.position,{x:85,y:-85});
   }
}
