var input = [];
//The input array takes values that the user put in through the text boxes
//from the program itself, and assigns the values to R B and G values
//this then determines what the colour of the shapes will be.
var button;
var r = 255;
var g = 0;
var b = 0;
//The Default colour of the shapes are red.
var k = 'Program Key: 1) You cannot draw anything until you have three values put into the three textboxes. 2) Once you have done this step you draw ellipses automatically, to change this you can hold down middle mouse button for rectangles and hold left click to draw triangle. 3) To reset the program press r on the keyboard';


function setup() {
  input[0] = createInput();
  input[0].position(45,750);
  input[1] = createInput();
  input[1].position(45, 775);
  input[2] = createInput();
  input[2].position(45, 800);
  button = createButton('submit');
  button.position(input[2].x + input[2].width + 10, 800);
  button.mousePressed(recolour);


  let size;
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background(random(255));
  //noLoop();
  fill(255);
  stroke(255, 0, 0);
  strokeWeight(0.2);
  textSize(20);
  text(k, 10, 10, 300, 400); // Text wraps within text box
}

function draw()
{
  ShapesColour = [random(255),random(255),random(255)];
  //The ShapesColour array is used for the rectangles on this program
  //each of the rectangles drawn will have different colours every single time.
  //this is also the use of randomness.
  if (input[0].value() == '' || input[1].value() =='' || input[2].value() == '')
  {
    console.log('Insert Values');
  }
  //This if statement stops the program from drawing straight away, it will
  //only start drawing until the three values are put into the program.
  else
  {
    stroke(r + 20,g + 20,b + 20)
      if (mouseIsPressed)
    {
      var k = ''
      console.log("This is doing things");
      if (mouseButton === LEFT)
      {
        drawTriangle();
        //When the user will hold down the left mouse button the ellipses will
        //change to triangles, until the user lets go of the button.
      }
      else if (mouseButton === CENTER)
      {
        drawRectange();
        //When the user will hold down the left mouse button the ellipses will
        //change to rectangles, until the user lets go of the button.
      }
    }
    else
    {
      drawCircle();
      //The program will draw ellipses by default.
    }
  }
}
function drawCircle(x,y)
{
  strokeWeight(1);
  fill(r,g,b,127);
  ellipse(mouseX, mouseY,mouseX*0.75,mouseY*0.75);
  fill(r,g,b,127);
  ellipse(mouseX, mouseY,mouseX*0.5,mouseY*0.5);
  fill(r,g,b,127);
  ellipse(mouseX, mouseY,mouseX*0.25,mouseY*0.25);
}

function drawRectange(x,y)
{
  strokeWeight(1);
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
  strokeWeight(1);
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
  //recolour assigns the values from the input to these R G B values and
  //uses these values for ellipse and triangles Colour.
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
    fill(255);
    stroke(255, 0, 0);
    strokeWeight(0.2);
    textSize(20);
    text(k, 10, 10, 300, 400);
    //This is the function the program uses to reset the R G B values and
    //also it refreshes the entire canvas, the user can go again.
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
  //This is a simple function which changes the canvas size of the canvas
  //when the window the program is running is made bigger or smaller.
}
