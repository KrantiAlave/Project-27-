const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

var roofObj;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var ropObj1,ropObj2,ropObj3,ropObj4,roopObj5;

function setup() {
	createCanvas(800,700);
 rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

roofObj = new Roof(width/2,height/4,300,40);
 //Create The Bodies Here
 bobDiameter = 50;
 bobObj1 = new Bob(280,450,30);
 bobObj2 = new Bob(340,450,30);
 bobObj3 = new Bob(400,450,30);
 bobObj4 = new Bob(460,450,30);
 bobObj5 = new Bob(520,450,30);
 
 ropObj1= new Rop(bobObj1.body,{x : 280, y : 150});
 ropObj2= new Rop(bobObj2.body, {x : 340, y : 150});
 ropObj3= new Rop(bobObj3.body,{x : 400, y : 150});
 ropObj4= new Rop(bobObj4.body,{x :460, y : 150});
 ropObj5= new Rop(bobObj5.body,{x :460, y : 150});
  
	Engine.run(engine);
  
}

function draw() {
  background(225);

  rectMode(CENTER);
  Engine.update(engine);

  //To Display Bodies Here
  ropObj1.display();
  ropObj2.display();
  ropObj3.display();
  ropObj4.display();
  ropObj5.display();
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  roofObj.display();

  //To Create Function For Up arrow
  keyPressed();
  
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-100,y:-100}); } 
} 




