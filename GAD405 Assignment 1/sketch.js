var input = [];
var button;
var r = 255;
var g = 0;
var b = 0;

function setup() {
  input[0] = createInput();
  input[0].position(45,750);
  input[1] = createInput();
  input[1].position(45, 775);
  input[2] = createInput();
  input[2].position(45, 800);
  button = createButton('submit');
  button.position(input[2].x + input[2].width, 800);
  button.mousePressed(recolour);

  let size;
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background(random(255));
  //noLoop();
}

function draw()
{
  ShapesColour = [random(255),random(255),random(255)];
  if (input[0].value() == '' || input[1].value() =='' || input[2].value() == '')
  {
    console.log('Insert Values');
  }
  else
  {
      if (mouseIsPressed)
    {
      console.log("This is doing things");
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
}
function drawCircle(x,y)
{
  strokeWeight(0);
  fill(r,g,b,127);
  ellipse(mouseX, mouseY,mouseX*0.75,mouseY*0.75);
  fill(r,g,b,127);
  ellipse(mouseX, mouseY,mouseX*0.5,mouseY*0.5);
  fill(r,g,b,127);
  ellipse(mouseX, mouseY,mouseX*0.25,mouseY*0.25);
}

function drawRectange(x,y)
{
  strokeWeight(0);
  size = random(200);
  fill(ShapesColour[0],ShapesColour[1],ShapesColour[2],random(255));
  rect(mouseX/2, mouseY/2,mouseX,mouseY);
  fill(ShapesColour[0],ShapesColour[1],ShapesColour[2],random(255));
  rect(mouseX*0.625, mouseY*0.625,mouseX*0.75,mouseY*0.75);
  fill(ShapesColour[0],ShapesColour[1],ShapesColour[2],random(255));
  rect(mouseX*0.75, mouseY*0.75,mouseX*0.5,mouseY*0.5);
  fill(ShapesColour[0],ShapesColour[1],ShapesColour[2],random(255));
  rect(mouseX*0.875, mouseY*0.875,mouseX*0.25,mouseY*0.25);
}

function drawTriangle(x,y)
{
  strokeWeight(0);
  size = random(200);
  fill(r,g,b,random(255));
  triangle(mouseX-66, mouseY, mouseX+66, mouseY,mouseX,mouseY/4);
  fill(r,g,b,random(255));
  triangle(mouseX-66, mouseY, mouseX+66, mouseY,mouseX,mouseY/3);
  fill(r,g,b,random(255));
  triangle(mouseX-66, mouseY, mouseX+66, mouseY,mouseX,mouseY/2);
}

function recolour()
{
  r = input[0].value();
  g = input[1].value();
  b = input[2].value();

}

function keyPressed()
{
  if (keyCode === 82)
  {
    clear();
    input[0].value('');
    input[1].value('');
    input[2].value('');
    background(random(255));
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
