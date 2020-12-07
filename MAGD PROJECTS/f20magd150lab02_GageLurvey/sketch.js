function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  
  //colors
   let Y = color(255,255,0);
  let B = color('#0000A0');
  let G = color(0,255,150);
  let S = color(255,150,0);
  
   //planet
  fill(B);
  circle(350,300,300); 
  
  //land mass
  push();
  fill(G);
  triangle(300,350,400,200,300,250);
  triangle(300,300,425,420,360,300);
  triangle(400,250,275,300,450,330);
  pop();
  
  //sun
  push();
  colorMode(HSB,255,100,100);
  fill(50,40,100);
  circle(25,25,250);
  pop();

  
  //Alien Ship
  fill(144);
  strokeWeight(0);
  
  arc(250,250,200,100,3.14,0,CHORD);
  
  push();
  fill(Y);
  quad(230,180,270,180,270,210,230,210);
  pop();
  
 
}