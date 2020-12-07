 let g = 200;
//color set 1
  let r = 0;
  let G = 100;
  let b = 255;
//color set 2
  let r2 = 255;
  let g2 = 100;
  let b2 = 100;


  
function setup() {
  createCanvas(500, 500);
    background(220);
  noCursor();
}



function draw() {
  
  //let list
 
if (g>200) {
 g=10
}
  
if (g>1) {
  g++
}
  //color changer?
  r = (r + 2) % 255;
  G = (G + 2) % 255;
  b = (b + 2) % 255;
  
  
  //shape 1 mouse
  
  //min Max stuff
  let Min = min([r]);
  let Max = max([r]);
  
  
  //distance stuff
  let x1 = (500/2);
  let y1 = (500/2);
  let x2 = (mouseX);
  let y2 = (mouseY);
  
  push();
  ellipse(x1,y1,100,100);
  
  //prints the distance of the center circle
  let d = dist(x1,y1,x2,y2);
     print(d);


  push();
  fill(r2,g2,b2);
  ellipse(Min,Max,Min,Max);
  pop();
  
  push();
  fill(r,G,b);
  
  ellipse(mouseX, mouseY,g,g);
  pop();
  
  //shape adjustment shape
  push();
  
  //color set 2 for shape
  r2 = float(r2 + 3) % 255;
  g2 = float(g2 + 3) % 255;
  b2 = float(b2 + 3) % 255;
  
  fill(r2,g2,b2);
  ellipse(mouseX, mouseY, width/2 - pmouseX, height/2 - pmouseY);
  pop();

}


