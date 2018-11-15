
let size = 50;
let size2 = 25;

noStroke();

function setup() {

  createCanvas(500, 500);
  frameRate(60);
  //noLoop();
}
function draw()
{
  background(0);

  for (let y = 0; y< 10; y++)
  {
    for (let x = 0; x < 10; x++)
    {
    stroke(0);
    fill(255, 137, 0, 255);
    rect(size*x, size*y, size, size);

      if ()




    console.log("X: " + x + " Y: " + y);

    }
  }


  /*for (let x = 0; x < 10; x++)
  {
    rect(size * x, height / 2.2, size, size);
    rect(size * x, height * 0.9, size, size);
    rect(size * x, height / 500, size, size);
  }
  */
}
