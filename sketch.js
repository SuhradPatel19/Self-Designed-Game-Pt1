const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine, world
var backgroundImage
var myground, myplatform
var mybox1, mybox2, mybox3, mybox4, mybox5
var log1,log2,log3,log4
var bird1, bird2, bird3
var birds=[]
var sling1,sling2,sling3
var pig1,pig2

function preload() {
  backgroundImage = loadImage("assets/bg.png")

}


function setup() {
  createCanvas(1200, 500);





  engine = Engine.create();
  world = engine.world;

  myground = new Ground(600, 490, width, 20)
  myplatform = new Ground(120, 390, 300, 220)
  mybox1 = new Box(580, 345, 70, 70)
  mybox2 = new Box(830, 345, 70, 70)
  mybox3 = new Box(580, 280, 70, 70)
  mybox4 = new Box(830, 280, 70, 70)
  mybox5 = new Box(700, 220, 70, 70)

  log1 = new Log(700, 305, 380, 20,PI)
  log2 = new Log(700, 250, 380, 20,PI)
  log3 = new Log(710, 180, 200, 20,PI/3)
  log4 = new Log(620, 180, 200, 20,-PI/3)

  bird1 = new Bird(200,140,50,50)
  bird2 = new Bird(100,260,50,50)
  bird3 = new Bird(50,260,50,50)

  birds.push(bird3)
  birds.push(bird2)
  birds.push(bird1)

  sling1 = new Slingshot(bird1.body,{x:200,y:100})

  pig1 = new Pigs(700,480,50,50)
  pig2 = new Pigs(700,270,50,50)


  






}


function draw() {
  background(backgroundImage);
  Engine.update(engine);

  fill("black")
  text(mouseX + "," + mouseY, mouseX, mouseY)

  myground.display()
  myplatform.display()
  mybox1.display()
  mybox2.display()
  mybox3.display()
  mybox4.display()
  mybox5.display()

  log1.display()
  log2.display()
  log3.display()
  log4.display()

  sling1.display()

  bird1.displayRed()
  bird2.displayYellow()
  bird3.displayBlue()

  pig1.display()
  pig2.display()

 



}

function mouseDragged(){
  Matter.Body.setPosition(bird1.body, {x:mouseX,y:mouseY})

}

function mouseReleased() {
  sling1.detach()

  

  

}

function keyPressed(){
  if(keyCode === 32){
    sling1.attach(bird1.body)

  }
}

// logs moving on thier own (3 and 4)
// mousereleased not working
// next session we will complete game



