//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects

//Initialization function
function setup() {

  console.log("Initialization: OK")
  createCanvas(800, 600);
}

function draw() {

  background(100);

  //Background Black Layer
  noStroke()
  fill(0, 0, 0);
  rect(238, 150, 275, 100);
  rect(203, 175, 350, 290);
  rect(275, 125, 200, 400);
  rect(165, 200, 425, 60);
  rect(127, 260, 500, 60);
  rect(165, 320, 425, 60);
  rect(127, 380, 500, 60);
  rect(165, 440, 425, 30);


  //Red Layer
  //Stroke(255, 0, 0);
  noStroke()
  fill(255, 0, 0);
  rect(238, 175, 275, 45);
  rect(275, 150, 200, 100);
  rect(238, 445, 275, 105);

  //White Layer
  noStroke()
  fill(255, 255, 255);
  rect(165, 260, 425, 60);
  fill(0, 0, 0);
  rect(203, 260, 350, 30);

  fill(255, 255, 255);
  rect(312, 220, 125, 30);
  rect(238, 250, 275, 100);
  rect(275, 350, 200, 30);
  rect(165, 380, 60, 60);
  rect(530, 380, 60, 60);



  fill(0, 0, 0);//Black
  rect(400, 301, 30, 50);
  rect(320, 301, 30, 50);

  fill(255, 0, 0);//red
  rect(350, 350, 50, 30);

  //Front Black Layer
  noStroke()
  fill(0, 0, 0);
  rect(275, 250, 200, 25);
  rect(405, 480, 60, 35);
  rect(345, 445, 60, 35);
  rect(285, 480, 60, 35);
  rect(345, 515, 60, 35);
  rect(237, 550, 109, 25);
  rect(203, 470, 35, 80);
  rect(404, 550, 109, 25);
  rect(513, 470, 35, 80);
  rect(465, 431, 50, 50);
  rect(235, 431, 50, 50);
  console.log("Rendering...")
  noLoop();
}
