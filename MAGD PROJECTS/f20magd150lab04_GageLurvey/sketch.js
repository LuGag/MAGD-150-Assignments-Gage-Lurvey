
let pR = 255
let pG = 230
let c = 250

function setup() {
  createCanvas(500, 500);
    background(220);
  textSize(50);
    textAlign(CENTER,BOTTOM);
}

function draw() {
  
fill(0,0,0);
text(':D',c,450);
  if(c) {
    c++
  }
  if(c==500){
      c=0
      c++
  }
  
//text
push();
textSize(15);
fill(0,0,0);
noStroke();
text('Press mouse to bake pizza, press any key to get a new pizza',250,50);
pop();

  //pizza circle

ellipseMode(CENTER);
  fill(pR,pG,0);
  stroke (255,200,0);
  ellipse (250,250,200,200);
  
  
  //slice lines
  line(250,250,250,150);
  line(250,250,150,250);
  line(250,250,250,350);
  line(250,250,350,250);
  
  //peperoni
   stroke(255,0,0);
  fill(255,0,60);
  
  ellipse(180,250,25,25);
  ellipse(260,180,25,25);
  ellipse(220,200,25,25);
  ellipse(270,270,25,25);
  ellipse(280,320,25,25);
  ellipse(200,290,25,25);
  ellipse(300,225,25,25);
  
  //if pizza burns
  if(pR<= -30) {
     for(let f=1;f<255;f++) {
  fill(f,0,0);
  ellipse(random(250,260),random(150,350),f,f);
  push();
  fill(0,0,0);
  text('Your pizza is on fire!',250,450);
  pop();
  }
}
  
}

  //New Pizza
function keyPressed() {
  if(pR < 255) {
    pR = 255
  }
  
  if(pG < 230) {
    pG = 230
  }
}

//pizza cooking
function mousePressed() {
  if(pR <= 255) {
    pR = pR-15
    
  }
  if(pG <= 230) {
    pG = pG-15
  }
}
