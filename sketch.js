const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	var canvas = createCanvas(900, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200,height,5000,30);
	
	paper = new Paper(100, 300, 15);
	World.add(world, paper);

	dustbin1 = new Dustbin(703, 678, 200, 20);
	World.add(world, dustbin1);

	dustbin2 = new Dustbin(796, 637, 20, 100);
	World.add(world, dustbin2);

	dustbin3 = new Dustbin(603, 637,20, 100);
	World.add(world, dustbin3);

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 12,
		y: -20
	  });
	}
  }