//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {

  console.log("Initialization: OK")
  createCanvas(700, 400);
}

function draw() {

  background(100);

  strokeWeight(4);
  stroke(0, 255, 0)
  line(0, 0, 1200, 700);

  stroke(255, 255, 0)
  line(700, 0, 0, 390);

  stroke(255, 0, 255)
  line(10, 10, 700, 10);

  stroke(255, 0, 0)
  line(690, 10, 690, 690);

  stroke(0, 255, 255)
  line(10, 10, 10, 700);

  stroke(150, 150, 0)
  line(0, 390, 700, 390);

  //Center shape position and color
  fill(255);
  strokeWeight(1);
  stroke(0);
  /*rectMode(CENTER);
  triangle(350, 100, 500, 250, 200, 250)
  //Set text preferences for circle0
  textAlign(CENTER);
  fill(100);
  text("Triangle", 350, 175);
  text("Center Position:", 350, 200);
  text("X=350, Y=200", width/2, height/2+20);
  */

  fill(0, 0, 255);
  ellipse(0, 0, 100, 100);

  fill(255, 0, 0);
  ellipse(width, 0, 100, 100);

  fill(0, 255, 0);
  ellipse(0, height, 100, 100);

  fill(255, 255, 0);
  ellipse(width, height, 100, 100);

  console.log("Rendering...")
  noLoop();
}
