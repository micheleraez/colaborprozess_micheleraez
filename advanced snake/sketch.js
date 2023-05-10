let rect_sizes = [100, 125, 150, 175, 200, 225, 250, 275, 300];

function setup() {
  let canvas = createCanvas(innerWidth, innerHeight, );

  //canvas.parent('#p5')
  background(0);
  rectMode(CENTER);
  noFill();
}

let mx = []
let my = []

let limit = 100


function draw() {
  stroke(255)
  // for (let i = 0; i < rect_sizes.length; i++) {
  //   let rect_size = rect_sizes[i];
  //   // console.log(rect_size)
  //   let x = width / 2;
  //   let y = height / 2;
  //   push()
  //   translate(x, y)
  //   rotate(i)
  //   rect(0, 0, rect_size, rect_size);
  //   pop()
  // }

  background(0)

  mx.push(mouseX)
  my.push(mouseY)

  for (let i = 0; i < mx.length; i++) {
    let x = mx[i];
    let y = my[i];
    rect(x, y, 50, 50)

  }

  if (mx.length >= limit) {
    mx.shift()
  }

  if (my.length >= limit) {
    my.shift()
  }



}