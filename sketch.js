
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

	//paper = new Paper(400, 200, 20, 20);

	ground = new Ground(600, 370, 1200, 10);

	bin1 = new Dustbin(1000, 355, 170, 20);
	bin2 = new Dustbin(905, 309, 20, 90);
	bin3 = new Dustbin(1095, 309, 20, 90);

	var options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}
	
	paper = Bodies.circle(200, 100, 20, options);
    World.add(world, paper);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  //paper.display();

  ground.display();

  bin1.display();
  bin2.display();
  bin3.display();

  ellipseMode(RADIUS);
  ellipse(paper.position.x , paper.position.y , 20, 20);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper, paper.position,{x:85,y:-85});
		//Matter.Body.applyForce(body, position, force)
	}
}



