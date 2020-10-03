const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9;

var box10,box11,box12,box13,box14;
var box15,box16,box17,box18;

var polygon;

var slingshot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  

  stand1=new Ground(300,370,160,10);
  stand2=new Ground(600,200,160,10);

  box1=new Box(240,345,30,40);
  box2=new Box(270,345,30,40);
  box3=new Box(300,345,30,40);
  box4=new Box(330,345,30,40);
  box5=new Box(360,345,30,40);
  box6=new Box(330,305,30,40);
  box7=new Box(300,305,30,40);
  box8=new Box(270,305,30,40);
  box9=new Box(300,265,30,40);

  box10=new Box(540,175,30,40);
  box11=new Box(570,175,30,40);
  box12=new Box(600,175,30,40);
  box13=new Box(630,175,30,40);
  box14=new Box(660,175,30,40);
  box15=new Box(630,135,30,40);
  box16=new Box(600,135,30,40);
  box17=new Box(570,135,30,40);
  box18=new Box(600,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);


  slingshot = new SlingShot(this.polygon, {x:100,y:200});

  //polygon = new Polygon(10,10,20,20);
}

function draw() {
  background(255,255,255);  


  stand1.display();
  stand2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  slingshot.display();


  polygon.ellipse;
  //polygon.display();
  drawSprites();
}


function mouseDragged(){
  setPosition(this.polygon, {x: mouseX , y: mouseY});

}


function mouseReleased(){

  slingshot.fly();
}