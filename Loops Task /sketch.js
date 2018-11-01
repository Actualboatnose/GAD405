
let size = 50;
let size2 = 25;

function setup() {

  createCanvas(500, 500);
  //noLoop();
  frameRate(5);
}
function draw()
{
  background(0);



  for (let y = 0; y< 10; y++)
  {
    for (let x = 0; x < 10; x++)
    {
    stroke(0)
    fill(215, 200, 170);
    rect(size*x, size*y, size, size);
    noStroke();
    fill(random(255),random(255),random(255));
    rect(size*x+12.5, size*y+12.5, size2, size2);
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
