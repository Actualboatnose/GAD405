
function setup() {

  createCanvas(500, 500);
  frameRate(60);
  //noLoop();
}
function draw()
{
size=width/10
background(0);
//red=map(x,,10,0,600);
red1 = map(mouseX, 0, width, 0, 10)
red2 = map(mouseY, 0, width, 0, 10)
opy= map(mouseY,0,600,0,255)
opx= map(mouseX,0,600,0,255)
avop=(opx+opy)/2
for(let x=0;x<10;x++)
{
  for(let y=0;y<10;y++)
  {

    //red=map(x,0,10,0,600);
    fill(255,127.5,0,avop);
    if(x==int(red1)||y==int(red2)){
      fill(0,255,255,avop);
    }
    if(x==int(red1)&&y==int(red2)){
      fill(255,0,0);
    }
  rect(size*x,size*y,size,size);


  }
}
}
