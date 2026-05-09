function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(250);
  let t = color(200,255,255);
  let b = color(200,225,255);
  let d = color(85,115,145);
  stroke(15);
  fill(t);
  rect(-25, -25, 50, 17, 5);
  rect(-5, -110, 7, 70);
  fill(b);
  ellipse(-1, -53, 90, 65);
  rect(37, 15, 10, 80);
  rect(-47, 15, 10, 80);
  fill(t);
  circle(40, 15, 25);
  circle(-40, 15, 25);
  rect(-10, 75, 20, 60, 2);
  fill(b);
  circle(0, 145, 30);
  rect(-15, 145, 30, 0.25);
  triangle(-50, -10, 50, -10, 0, 100);
  fill(d);
  circle(-22, -60, 15);
  circle(17, -60, 15);
  rect(-10, -40, 20, 5);
  fill(249);
  noStroke();
  rect(-20, 145.5, 60, 20, 2);
  stroke(15);
  fill(d);
  rotateY(frameCount * 0.05);
  rect(-10, -130, 18, 20, 200);
  fill(b);
  rect(-100, -130, 30, 30, 200);
  rect(-150, -100, 30, 30, 200);
}