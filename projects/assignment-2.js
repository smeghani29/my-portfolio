function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(213, 214, 222);
  strokeWeight(5)
  stroke('black');
  fill(240, 232, 216) // main house body
  rect(80, 200, 220 ,140, 3)
  rect(70, 340, 240, 30, 3)
  rect(158, 250, 65, 120, 3)
  fill(237, 226, 107) // windows
  rect(95, 225, 40, 70, 3)
  rect(245, 225, 40, 70, 3)
  fill(240, 232, 216) // chimney rectangles
  rect(230, 60, 25, 30, 3)
  rect(222, 45, 40, 15, 3)
  fill(166, 140, 113) // door
  rect(170, 300, 40, 70, 3)
  strokeWeight(0); // roof shapes to be able to add color
  fill(55, 59, 82)
  rect(100, 140, 190, 60)
  triangle(100, 140, 45, 200, 100, 200)
  triangle(290, 140, 340, 200, 100, 200)
  rect(122, 90, 145, 60)
  triangle(123, 90, 100, 140, 125, 140)
  triangle(260, 150, 267, 90, 290, 140)
  strokeWeight(5)
  stroke('black');
  line(45, 200, 340, 200)
  line(45, 200, 100, 140)
  line(340, 200, 290, 140)
  line(100, 140, 290, 140)
  line(100, 140, 120, 90)
  line(270, 90, 290, 140)
  line(120, 90, 270, 90)
  line(160, 225, 220, 225)
  line(145, 250, 235, 250)
  line(145, 250, 160, 225,)
  line(235, 250, 220, 225)
  line(115, 225, 115, 295)
  line(265, 225, 265, 295)
  line(95, 250, 135, 250)
  line(245, 250, 285, 250)
  line(200, 330, 200, 340)
  point(262, 10) // smoke or ash coming out of chimney 
  point(257, 2)
  point(256, 25)
  point(250, 20)
  point(246, 37)
  point(245, 8)
  point(240, 28)
  point(236, 17)
  point(235, 1)
  point(234, 33)
  point(227, 15)
  point(222, 25)
  point(220, 5)
  strokeWeight(0); // shapes to add color to the overhang    above the doorway
  fill(55, 59, 82)
  rect(160, 227, 60, 21, 3)
  triangle(162, 227, 162, 248, 148, 248)
  triangle(218, 248, 220, 227, 231, 248)
}