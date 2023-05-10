let x = 100;
let y = 100;
let squaresize = 1000 / 5 - 7;
let radius = 0;
let rot = 0; 


function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER);
  //background('white');
  angleMode(DEGREES); 

}

let clicked = false

function draw() {
  console.log(frameCount);
  stroke('black');
  noFill();
  strokeWeight(1);
  background(255,80)

//push();
//stroke(0); 
//fill(255, 181, 227, 30)

  //ellipse(mouseX, mouseY, 100, 100); 
  //pop();
  // rect(x, y, squaresize, squaresize, 0);
  // x = x + 200;



  // stroke('white');
  // strokeWeight(3);
  // noFill();
  // rect(300, 500,  35, 35, 0); 

  // stroke('white');
  // strokeWeight(3);
  // noFill();
  // rect(500, 500,  55, 55, 0); 

  // stroke('white');
  // strokeWeight(3);
  // noFill();
  // rect(300, 700,  15, 15, 0); 





  // if (x > width) {
  //   x = 100;
  //   y = y + 200;
  // }

  // if (y > height) {
  //   x = 100
  //   y = 100
  //   squaresize = squaresize - 20;
  // }

  // if (frameCount == 250) {
  //   noLoop();
  // }




  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      for (let i = 0; i < 10; i++) {
        if (x == 1 && y == 3) {
          if (i !== 0) {
            if (clicked) {
              //fill('red');
              //ellipse(x * 100 + 50, y * 100 + 50, (i + 1) * 10)
              rect(x * 100 + 50, y * 100 + 50, (i + 1) * 10, (i + 1) * 10, radius, radius, radius, radius);
            } else {
              push(); 
              translate(x*100 +50, y * 100 + 50,)
              rotate(rot)
              rect(0,0, (i+1) * 10); 
              pop(); 
            }
          }
        } else if (x == 1 && y == 2) {
          if (i !== 1) {
            if (clicked) {
              //fill('blue');
              //ellipse(x * 100 + 50, y * 100 + 50, (i + 1) * 10)
              rect(x * 100 + 50, y * 100 + 50, (i + 1) * 10, (i + 1) * 10, radius, radius, radius, radius);
            } else {
              //noFill();
              push(); 
              translate(x*100 +50, y * 100 + 50,)
              rotate(rot)
              rect(0,0, (i+1) * 10); 
              pop(); 
            }
          }
        } else if (x == 2 && y == 2) {
          if (i !== 3) {
            if (clicked) {
              //fill('green');
              //ellipse(x * 100 + 50, y * 100 + 50, (i + 1) * 10)
              rect(x * 100 + 50, y * 100 + 50, (i + 1) * 10, (i + 1) * 10, radius, radius, radius, radius);
            } else {
              // noFill();
              push(); 
              translate(x*100 +50, y * 100 + 50,)
              rotate(rot)
              rect(0,0, (i+1) * 10); 
              pop(); 
            }
          }
        } else {
          if (clicked) {
            //fill('purple');
            //ellipse(x * 100 + 50, y * 100 + 50, (i + 1) * 10)
            rect(x * 100 + 50, y * 100 + 50, (i + 1) * 10, (i + 1) * 10, radius, radius, radius, radius);
          } else {
            //noFill();
            push(); 
            translate(x*100 +50, y * 100 + 50,)
            rotate(rot)
            rect(0,0, (i+1) * 10); 
            pop(); 
          }
        }

      }
    }
  }

  if (frameCount%20==0) {
    radius = radius + 1;
    rot = rot +5; 
    if (radius > 100) {
      radius = 100
    }
  }

  

  // if (clicked) {
  //   radius = radius - 1;
  //   if (radius < 0) {
  //     radius = 0
  //   }
  // }

}





function mouseClicked(fxn) { clicked = !clicked }



function keyPressed() {
  if (key === "s") {
    saveCanvas("quadrate", "png");
  }
}
