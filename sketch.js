
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
    mango2=new mango(1150,150,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(850,250,30);
	mango5=new mango(900,300,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1 = new stone(250,400,30);
	launcher = new SlingShot(stone1.body,{x:250,y:400}) 
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  groundObject.display();
  launcher.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
launcher.fly();	
} 
function detectCollision(ls,lm){
	var lsPos = ls.body.position;
	var lmPos = lm.body.position;
	var distance = dist(lsPos.x,lsPos.y,lmPos.x,lmPos.y);
	if(distance <= lm.r+ls.r){
	Matter.Body.setStatic(lm.body,false)	
	}
}
function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone1.body,{x:250 , y:400})
launcher.attach(stone1.body);
}
}
