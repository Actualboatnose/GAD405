
/*let size = 50;
let size2 = 25;
rnd = new random;
*/
let height;
let width;
let PosX;
let PosY;
let size;
let Stroke;

function setup() {

  createCanvas(500, 500);
  //frameRate(60);
  background(random(255));
  //noLoop();
}

function draw()
{
  console.log("This is doing things");
  drawTarget();

}

/*function drawEllipse(x, y)
{
    Stroke = random(255);
    PosX = random(500);
    PosY = random(500);
    size = random(200);
    fill(random(255),0,random(255),random(255));
    ellipse(PosX,PosY,size,size,stroke);
    //console.log("X: " + x + " Y: " + y);
}*/

function drawTarget(x,y)
{
  //Stroke = random(255);
  PosX = random(500);
  PosY = random(500);
  size = random(200);
  fill(random(255),0,random(255),random(255));
  ellipse(PosX,PosY,size,size);
  ellipse(PosX,PosY,size*0.7,size*0.7);
  fill(random(255),random(255),0,random(255));
  ellipse(PosX,PosY,size*0.5,size*0.5);
  fill(0,random(255),random(255),random(255));
  ellipse(PosX,PosY,size*0.2,size*0.2);
}


  /*for (let x = 0; x < 10; x++)
  {
    rect(size * x, height / 2.2, size, size);
    rect(size * x, height * 0.9, size, size);
    rect(size * x, height / 500, size, size);
  }
  */
