function setup() {
  createCanvas(400,400);
  background(180);
}

function draw() {
  //Building code goes here
  //First (1) Building
  
  //shadow of building 1

  fill(240);
  strokeWeight(5);
  rect(85,150,100,300);
  
  //actual building 1
  rectMode (CORNER);
  fill(255);
  strokeWeight(5);
  rect(25,150,100,300);
  
  //antena 1 glow
  push();
  noStroke();
  fill(190);
  ellipse(110,94,25,25);
  pop();
  
  //building 1 antena
  strokeCap(SQUARE)
  line(110,98,110,150);
  point (110,94);
  
  //second building 2
    //shadow of building
  push();
    fill(240);
   rect(250,250,140,300);
  pop();
  
  //building 2
  push();
  fill(255);
  rect(250,250,100,300);
  pop();

  //the sun
  ellipseMode(CENTER);
  push();
  fill(220)
  ellipse(0,0,100,100);
  pop();
  
  //windows
  push();
  noFill();
  strokeWeight(2);
  //top left window of first building
  rect(35,170,20,25);
  rect(40,170,20,25);
  //top right window of first building
  rect(80,170,20,25);
  rect(85,170,20,25);
  
  //here goes the code for the extra windows
  
  rect(35,210,20,25);
  rect(40,210,20,25);
  //^Left vRight
  rect(80,210,20,25);
  rect(85,210,20,25);

  rect(35,250,20,25);
  rect(40,250,20,25);
  //^Left vRight
  rect(80,250,20,25);
  rect(85,250,20,25);
  
  rect(35,290,20,25);
  rect(40,290,20,25);
  //^Left vRight
  rect(80,290,20,25);
  rect(85,290,20,25);

  rect(35,330,20,25);
  rect(40,330,20,25);
  //^Left vRight
  rect(80,330,20,25);
  rect(85,330,20,25);
  pop();
  
  //antena 2 glow
  push();
  noStroke();
  fill(190);
  ellipse(320,196,25,25);
  pop();
  
  //antena for building 2
  line(320,250,320,200);
  point (320,196);
  
  
}