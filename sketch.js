
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ball;

function setup() {
	createCanvas(1000,1000);
	var ball_options={
		isStatic:false,
		restitution:0,
		friction:0,
		density:1.2
	}


	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Matter.Bodies.circle(260,100,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
	
groundObj=new Ground(width/2,670,width,20);
leftSide=new Ground(700,600,20,120);
rightSide=new Ground(900,600,20,120);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-65});
	}
}



