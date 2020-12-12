
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,100,30);
ground=new Ground(400,680,800,20);
box1 = new Box(650,650,200,100);
box2 = new Box(550,600,20,100);
box3 = new Box(750,600,20,100);
	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
 
  ground.display();


  box1.display();
  paper.display();
  //box2.display();
  //box3.display();
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.poaition,{x:30,y:-35})
	}
}



