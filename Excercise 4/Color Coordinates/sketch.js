let size = 200;

function setup()
{

  //frameRate(60);
createCanvas(400, 400);
noStroke();
  //noLoop();
}

function draw()
{
  background(0);

  var m1 = map(mouseX, 0, width, 0, 255);
  fill(0, 255, 254, m1);
  rect(size, size, size, size);
  var m2 = map(mouseY, 0, height, 0, 255);
  fill(255, 0, 0, m2);
  rect(0, 0, size, size);
  var m3 = map(mouseX, 0, width, 255, 0);
  fill(0, 255, 0, m3);
  rect(200, 0, size, size);
  var m4 = map(mouseY, 0, height, 255, 0);
  fill(255, 255, 0, m4);
  rect(0, 200, size, size);




  console.log("This is doing things");

}
