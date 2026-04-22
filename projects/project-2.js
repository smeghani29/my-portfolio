// ── Albumn Art ───────────────────────────────────────
let color2; // creates the variable
function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch-container');
  colorMode(HSB);
  color2 = random(2, 30); // randomizes the variable value
}
  
  let mainX = 10; // creates the variable

function draw() {
  background(273, 10, 77);
  strokeWeight(1);
  
  // draws a stop light that will stay near the bottom of the canvas no matter what the height of the canvas is because i used the height variable
  fill(40);
  rect(350, height-175, 12, 100, 5);
  rect(338, height-215, 35, 75, 5);
  fill(0, 83, 62);
  circle(355, height-202, 20);
  fill(44, 76, 83);
  circle(355, height-178, 20);
  fill(109, 76, 48);
  circle(355, height-153, 20);
  
  // draws the road that uses color and will stay at the base of the canvas because of height variable
  fill(10)
  rect(-10, height-85, 420, 100);
  fill(49, 66, 89);
  rect(5, height-50, 30, 8, 2);
  rect(45, height-50, 30, 8, 2);
  rect(85, height-50, 30, 8, 2);
  rect(125, height-50, 30, 8, 2);
  rect(165, height-50, 30, 8, 2);
  rect(205, height-50, 30, 8, 2);
  rect(245, height-50, 30, 8, 2);
  rect(285, height-50, 30, 8, 2);
  rect(325, height-50, 30, 8, 2);
  rect(365, height-50, 30, 8, 2);
  rect(405, height-50, 30, 8, 2);
  
  // car driving animation that makes the car loop around to the start after it goes off the screen
  mainX=mainX+1;
  if (mainX>450) {
    mainX = -60
  }
  
  // draws the car body
  fill(255);
  arc(mainX, height-80, 75, 90, PI, TWO_PI);
  // draws the car hood
  strokeWeight(0);
  arc(mainX+30, height-80, 50, 60, PI, TWO_PI);
  strokeWeight(1);
  arc(mainX+29, height-80, 50, 59, PI + HALF_PI, TWO_PI);
  // draws the windows
  arc(mainX-3, height-95, 40, 40, PI, PI + HALF_PI);
  line(mainX-23, height-95, mainX-3, height-95);
  line(mainX-3, height-95, mainX-3, height-115);
  arc(mainX+3, height-95, 40, 40, PI + HALF_PI, TWO_PI);
  line(mainX+23, height-95, mainX+3, height-95);
  line(mainX+3, height-95, mainX+3, height-115);
  // draws the bumper
  rect(mainX-40, height-80, 100, 15, 5);
  // draws the wheels
  circle(mainX-15, height-70, 32);
  circle(mainX-15, height-70, 12);
  circle(mainX+35, height-70, 32);
  circle(mainX+35, height-70, 12);
  
  // draws the clouds
  strokeWeight(0);
  fill(257, color2, 100); // uses the variable color2 to change saturation each time the code is run
  circle(60, height-350, 30);
  circle(75, height-335, 30);
  circle(50, height-335, 30);
  circle(85, height-362, 30);
  circle(60, height-371, 30);
  circle(40, height-362, 30);
  circle(95, height-350, 30);
  circle(30, height-347, 30);
  
  circle(200, height-270, 50);
  circle(225, height-255, 50);
  circle(180, height-255, 50);
  circle(235, height-302, 50);
  circle(200, height-311, 50);
  circle(170, height-302, 50);
  circle(255, height-272, 50);
  circle(150, height-275, 50);
  
}
  // ── Your code ends here ────────────────────────────

