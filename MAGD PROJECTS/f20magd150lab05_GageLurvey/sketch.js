
let TVS = 0
 var a,b,w,h,centerX,centerY;
 var x,xspeed;
let r = 25
var x1,y1;


function setup() {
  createCanvas(400, 400);
  
  //rectangle channel values
  a = 50;
  b = 360;
  w = 145;
  h = 390;
  
  centerX = a+(r-a)/2.0;
  centerY = b+(h-b)/2.0;
  
  //motion circle values
  x=89
  xspeed = 2
  
  //random motion
x1 = 100
y1 = 100
}
  
function draw() {
  background(25);
  
  //TV screen
  fill(TVS);
  rectMode(CORNERS);
  rect(50,50,340,330);
  
  //power button
  push();
  fill(255,0,100);
  text('Power',353,395);
  pop();
  
    let d = dist(370,370,mouseX,mouseY);
  if (d<15) {
    p = color(150,0,100);
  } else {
    p = color(255,0,100);
  }
 
  fill(p);
  ellipseMode(CENTER);
  ellipse(370,370,25,25);
  
  
  //channel button
   if(mouseX > a && mouseX < w && mouseY > b && mouseY < h) {
    cc = color(0,150,100);
   } else {
     cc = color(0,255,100);
   }
  
  fill(cc);
  rect(a,b,w,h);
  
  push();
  fill(0);
  textSize(20);
  stroke(5);
  text('Channel',60,380);
  pop();
  
  //motion
  fill(0);
  ellipse(x,200,75,75);
  x+= xspeed;
  
 if(x-89 <= 0 || x+89>385){
  xspeed *= -1;
 }

//random motion
ellipse(x1,y1,25,25);

var r = floor(random(4));

  switch (r) {
    case 0:
      x1 = x1 + 2;
      break;
    case 1:
      x1 = x1 - 2;
      break;
    case 2: 
      y1 = y1 + 2;
      break;
    case 3:
      y1 = y1 - 2;
      break;
  }
  if (x1<89 || x1>385) {
     x1 = width/2
  }
  if (y1<95 || y1>370) {
    y1 = height/2
  }
}

function mousePressed() {
  let d = dist(370,370,mouseX,mouseY);
  if(d < 15) {
    TVS = 255;
    
  }
}
  