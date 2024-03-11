//FA205 By Christina Loughlin Modules 0-2


function setup() {
  createCanvas(600, 800);
  background(0,133,44);
}

function draw() {
  
  stroke (33, 44,255);
  strokeWeight (4);
  fill (0,0,177,33);
  circle (mouseX,mouseY,33);
  //this is the little blue circle top left corner
  fill (120,0,33);
  circle (mouseX,mouseY,150);
  fill (200,10,45);
  circle (mouseX, mouseY, 150);
  //this is the circle with line through
  stroke (255,0,0);
  strokeWeight (7);
  fill (80,90,200);
  line (0,100,300,600)
  stroke (30);
  strokeWeight (5);
  rect(200,44,50,75);
  fill (95,33,200,255);
  //noStroke ();
  rect(mouseX,mouseY,75,100);
  line(0,0,300,600);
  rectMode(CENTER);
  
  
  
  
  
  
}

 
