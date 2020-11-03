
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bin1, bin2, bin3;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(400, 200, 30, 30);

	ground = new Ground(600, 370, 1200, 10);

	bin1 = new Dustbin(950, 355, 250, 20);
	bin2 = new Dustbin(825, 295, 20, 100);
    bin3 = new Dustbin(1075, 295, 20, 100);
	 
}


function draw() {
  background(0);
  Engine.update(engine);
  
  paper.display();

  ground.display();

  bin1.display();
  bin2.display();
  bin3.display();
   
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:155,y:-140});
	}
}
