let img;
let pixels;

function setup() {
  // setup of the sketch
  createCanvas(400, 400);
  img = loadImage("assets/heroromansigner.jpg")
  pixelDensity(10);
}

function draw() {
  background(220);
  //image(img, 0, 0)
  img.loadPixels();
  //let pix = img.pixels[23];
  //let b=brightness(pix); 
  //console.log(b); 

  for (let i =80; i < img.pixels.length; i = i+30) {

    img.pixels[i] = random(255);

  }
  img.updatePixels(); 

  image(img, 0, 0, 0); 
}


