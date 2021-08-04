const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var slingshot;
var ball;


function preload() { }

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground (600, 390, 1200, 20);
    stand1 = new Ground(400, 240, 200, 20);
    stand2 = new Ground(850, 200, 200, 20);
    box1 = new Box (320, 220, 40, 40);
    box2 = new Box (360, 220, 40, 40);
    box3 = new Box (400, 220, 40, 40);
    box4 = new Box (440, 220, 40, 40);
    box5 = new Box (480, 220, 40, 40);
    box6 = new Box (340, 180, 40, 40);
    box7 = new Box (380, 180, 40 ,40);
    box8 = new Box (420, 180, 40, 40);
    box9 = new Box (460, 180, 40, 40);
    box10 = new Box (360, 140, 40, 40);
    box11 = new Box (400, 140, 40, 40);
    box12 = new Box (440, 140, 40, 40);
    fill("pink");
    var ball_option = {restitution: 0.8}
    ball = Bodies.circle (50, 200, 20, ball_option);
    World.add (world, ball)
    slingshot = new SlingShot (this.ball, {x:100, y:140});

}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
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
    ellipseMode(RADIUS);
    ellipse(100, 200, 20, 20);
    slingshot.display();
}

function mouseDragged(){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    
    }
  


function mouseReleased(){
     slingshot.fly();
    // gameState = "launched" 
}

function keyPressed(){
    // if(keyCode === 32){
    //    slingshot.attach(bird.body);
    // }
}
