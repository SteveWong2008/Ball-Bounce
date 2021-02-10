const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
var physicsengine,world; 
var ground;
var ball; 

function setup() {
   var canvas = createCanvas(400,400);
   physicsengine = Engine.create();
   world = physicsengine.world;
   var ground_options = {
      isStatic : true 
    }
    var ball_options = {
      restitution : 1.0 
    }
   ground = Bodies.rectangle(200,390,200,20,ground_options); 
   World.add(world,ground);
   ball = Bodies.circle(200,10,20,ball_options);
   World.add(world,ball);
   console.log(ground); 
   console.log(ball);
   console.log(ground.position.x); 
   console.log(ground.position.y);
 }
 
 function draw() {
   background(0);
   Engine.update(physicsengine);
   rectMode(CENTER); 
   rect(ground.position.x,ground.position.y,200,20);
    ellipseMode(RADIUS);
   ellipse(ball.position.x,ball.position.y,20,20);
   
   drawSprites(); 
   }