var car,wall;
var speed,weight;
var car1;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  //car.debug=true;

  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2)
  //wall.shapeColor(80,80,80);

  car1= createSprite(100,200,50,50);
  car1.debug = true;

  deformation=0.5 * weight * speed * speed / 22500;
  

  
}

function draw() {
  background(255,255,255); 
  if(wall.x - car.x <= car.width /2 + wall.width /2){
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   
   if(deformation>180){
     car.shapeColor=color(255,0,0);
   }

   if(deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0);
   }

   if(deformation<100){
     car.shapeColor=color(0,255,0);
   }

  } 
  //car1.x = World.mouseX;
  //car1.y = World.mouseY;
  drawSprites();
}