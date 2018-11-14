let size;

function setup() {

  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(random(255));
  //noLoop();
}

function draw()
{
  console.log("This is doing things");
  if (mouseIsPressed)
  {
    if (mouseButton === LEFT)
    {
      drawTriangle();
    }
    else if (mouseButton === CENTER)
    {
      drawRectange();
    }
  }
  else
  {
    drawCircle();
  }
}
function drawCircle(x,y)
{
  strokeWeight(1);
  fill(random(255),random(255),random(255),127);
  ellipse(mouseX, mouseY,mouseX*0.75,mouseY*0.75);
  fill(random(255),random(255),random(255),127);
  ellipse(mouseX, mouseY,mouseX*0.5,mouseY*0.5);
  fill(random(255),random(255),random(255),127);
  ellipse(mouseX, mouseY,mouseX*0.25,mouseY*0.25);
}

function drawRectange(x,y)
{
  strokeWeight(0);
  size = random(200);
  fill(random(255),random(255),random(255),random(255));
  rect(mouseX/2, mouseY/2,mouseX,mouseY);
  fill(random(255),random(255),random(255),random(255));
  rect(mouseX*0.625, mouseY*0.625,mouseX*0.75,mouseY*0.75);
  fill(random(255),random(255),random(255),random(255));
  rect(mouseX*0.75, mouseY*0.75,mouseX*0.5,mouseY*0.5);
  fill(random(255),random(255),random(255),random(255));
  rect(mouseX*0.875, mouseY*0.875,mouseX*0.25,mouseY*0.25);
}

function drawTriangle(x,y)
{
  strokeWeight(2);
  size = random(200);
  fill(random(255),random(255),random(255),random(255));
  triangle(mouseX-66, mouseY, mouseX+66, mouseY,mouseX,mouseY/4);
  fill(random(255),random(255),random(255),random(255));
  triangle(mouseX-66, mouseY, mouseX+66, mouseY,mouseX,mouseY/3);
  fill(random(255),random(255),random(255),random(255));
  triangle(mouseX-66, mouseY, mouseX+66, mouseY,mouseX,mouseY/2);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
