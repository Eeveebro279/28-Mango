
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("images/boy.png");
	treeImg = loadImage("images/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy = createSprite(200, 600, 10, 10);
boy.addImage(boyImg);
boy.scale = 0.1;
tree= createSprite (600,440, 10, 10);
tree.addImage(treeImg);
tree.scale = 0.5;
ground = new Ground (400, 680, width, 20);
stoneObj = new Stone (235, 420, 30);
launcherObj = new Launcher (stoneObj.body, {x: 150, y: 540})
mango1 = new Mango (450, 420, 30);
mango2 = new Mango (740, 420, 30);
mango3 = new Mango (570, 330, 30);
mango4 = new Mango (640, 380, 30);
mango5 = new Mango (670, 220, 30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  tree.display();
  ground.display();
  stoneObj.display();
  launcher.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
  launcherObj.fly();
}

function detectCollision (){

  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist (stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance <= lmango.r - lstone.r){
    Matter.Body.setStatic  (lmango.body,false)
  }

}

