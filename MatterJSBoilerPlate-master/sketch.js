
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var terra,copy,wall,wal,wa;
var engine,world;

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;
 
	terra = new Ground();
	copy = new Paper(160,360);

	wa = new Bin(600,345,60,10);
	wal = new Bin(565,310,10,80);
	wall = new Bin(635,310,10,80);

	Engine.run(engine);
}


function draw() {
  background(0);
  
  terra.earth();

  wa.hiro();
  wal.hiro();
  wall.hiro();

  copy.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(copy.pap,copy.pap.position,{x:45,y:-70});
	}
}
