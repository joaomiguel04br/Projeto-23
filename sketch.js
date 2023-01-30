
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1 
var block2
var rotador1,rotador2,rotador3
var ball1,ball2,ball3
var angle1 = 60
var angle2 = 60
var angle3 = 60

function preload()
{
	
}

function setup() {
	createCanvas(550, 600);


	engine = Engine.create();
	world = engine.world;

	var plane_options={
		isStatic: true
	}

	var rotador_options={
		isStatic: true
	}

	var ball_options={
		restitution:0.6,
		friction:0.02
	}

	plane = Bodies.rectangle(600,height,1200,20,plane_options)
	World.add(world,plane)
	block1 = Bodies.rectangle(100,400,150,20,plane_options)
	World.add(world,block1)
	block2 = Bodies.rectangle(400,400,150,20,plane_options)
	World.add(world,block2)

	rotador1 = Bodies.rectangle(250,200,150,20,rotador_options)
	World.add(world,rotador1)
	rotador2 = Bodies.rectangle(250,200,150,20,rotador_options)
	World.add(world,rotador2)
	rotador3 = Bodies.rectangle(250,200,150,20,rotador_options)
	World.add(world,rotador3)

	ball1 = Bodies.circle(220,10,10,ball_options)
	World.add(world,ball1)
	ball2 = Bodies.circle(220,10,10,ball_options)
	World.add(world,ball2)
	ball3 = Bodies.circle(220,10,10,ball_options)
	World.add(world,ball3)

	Engine.run(engine);

	fill("Black")
	rectMode(CENTER)
	ellipseMode(RADIUS)
}

function draw() {
  background("LightPink");
  Engine.update(engine)

  rect(plane.position.x,plane.position.y,1200,20)	
  rect(block1.position.x,block1.position.y,150,20)	
  rect(block2.position.x,block2.position.y,150,20)	

  ellipse(ball1.position.x,ball1.position.y,10)	
  ellipse(ball2.position.x,ball2.position.y,10)	
  ellipse(ball3.position.x,ball3.position.y,10)
  
  Matter.Body.rotate(rotador1,angle1)
  push()
  translate(rotador1.position.x,rotador1.position.y)
  rotate(angle1)
  rect(0,0,150,20)
  pop()
  angle1 +=5

  Matter.Body.rotate(rotador2,angle2)
  push()
  translate(rotador2.position.x,rotador2.position.y)
  rotate(angle2)
  rect(0,0,150,20)
  pop()
  angle2 +=2.5

  Matter.Body.rotate(rotador3,angle3)
  push()
  translate(rotador3.position.x,rotador3.position.y)
  rotate(angle3)
  rect(0,0,150,20)
  pop()
  angle3 +=1

  rect(rotador1.position.x,rotador1.position.y,150,20)	
  rect(rotador2.position.x,rotador2.position.y,150,20)	
  rect(rotador3.position.x,rotador3.position.y,150,20)

  drawSprites();
 
}



