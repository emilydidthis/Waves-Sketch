let vid;
let col=255;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  frameRate(30);
  vid = createVideo(['waterShort.mp4'], vidLoad);
  vid.size(windowWidth, windowHeight);
  vid.hide();
  noStroke();
}

function draw() {
  //vid.loop();
  col-=.1;
  //background(220);
  image(vid, 0, 0);
  vid.loadPixels();
  //fill(0,0,255,60);
  //rect(0,0,windowWidth, windowHeight);
  for(let x = 0; x < vid.width; x+=10)
    for(let y = 0; y < vid.width; y+=10){
      let colorFromVideo = vid.get(x,y);

      for (let i = 0; i < colorFromVideo.length; i+=4)
      {
        if (colorFromVideo[i] > col && colorFromVideo[i+1] > col && colorFromVideo[i+2] > col){
          colorFromVideo[i] = 255;
          colorFromVideo[i+1] = 255;
          colorFromVideo[i+2] = 255;
          colorFromVideo[i+3] = 255;
        }
        else{
          colorFromVideo[i] = 0;
          colorFromVideo[i+1] = 0;
          colorFromVideo[i+2] = 0;
          colorFromVideo[i+3] = 0;
        }
      }
      fill(colorFromVideo);
      rect(x, y, 10,10 );
    }
  }
function vidLoad() {
  vid.loop();
}
                  
