const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ceiling;
var ground;
var engine,world;
var object,box1,box2,floor1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new box(100,200,20,20);
    box2 = new box(300,200,20,20);
    floor1 = new floor(200,380,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    floor1.display();
}
