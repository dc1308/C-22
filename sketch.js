const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

var d_engine , d_world;
var ob1, ball;

function setup() {
  createCanvas(400,400);
  
  d_engine = Engine.create();
  d_world = d_engine.world;

  var options = {
    isStatic : true
  }
 ob1 = Bodies.rectangle(200,400,400,20, options);
 World.add(d_world , ob1);
 
 var options1 = {
   restitution : 1
 }
 ball= Bodies.circle(200,200,20, options1);
 World.add(d_world, ball);
 console.log(ball);

}

function draw() {
  background("black");  
  Engine.update(d_engine);
  rectMode(CENTER);
  fill("brown");
  rect(ob1.position.x, ob1.position.y, 400, 20);

  fill("white");
  stroke ("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
 // image(ballImg , 0 , 0 ,10,100);
  
}