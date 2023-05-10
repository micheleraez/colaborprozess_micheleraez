

function setup() {
  // setup of the sketch
  createCanvas(800, 400);
  background(255, 153, 153);
  rectMode(CENTER); 
}

let slider = document.querySelector('#my-slider')
let rot = document.querySelector('#rot')
let gruen = document.querySelector('#gruen')


// option + shift + f = format you code 
function draw() {
  console.log(slider.value)


 // let rand = random(-10, 10);

  let sinus = sin(frameCount / 70);
  let sinus2 = sin(frameCount / 50);

  let n = noise(sinus, sinus2)
  
background (0, 153, 153); 
  // here you draw to the screen
  fill(rot.value,0,0);
  // mouseX and mouseY are the mouse coordinates 
  let x = mouseX;
  let y = mouseY;

  for (let i = 0; i < 20; i++) {
    stroke(10, 20, 90, 50 )
  let pos_x = (x + (i * 50)); 
  let pos_y = y + n * 50; 
  if (i%2 == 0) {
  //ellipse(pos_x, pos_y, 100, 100) 
  ellipse(x, y, 
    (i + 2) * 10, 
    sinus * (i + 2) * 30
  )
  }else{x,y, 
  rect(x, y, 
    (sinus2 + 2) * (i+2) * 10, 
    125
  )
  }
 
}

} 
