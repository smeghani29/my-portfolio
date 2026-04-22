// ── Vehicle Animation ───────────────────────────────────────
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
}

  let mainX = 10
  let mainX2 = 405
  let leafX = 600
  let leafY = -100
  let bmove = 1
  
function draw() {
  background(168, 179, 155);
  
  leafX--
  leafY++
  strokeWeight(4)
  stroke(56, 71, 51)
  fill(89, 115, 81)
  arc(leafX-200, leafY+100, 120, 80, PI, TWO_PI)
  arc(leafX-200, leafY+100, 120, 80, TWO_PI, PI);
  //stems
  line(leafX-290, leafY+99, leafX-260, leafY+99)
  line(leafX-290, leafY+100, leafX-140, leafY+100)
  line(leafX-290, leafY+101, leafX-260, leafY+101)
  // veins
  line(leafX-255, leafY+100, leafX-235, leafY+115)
  line(leafX-240, leafY+100, leafX-210, leafY+80)
  line(leafX-225, leafY+100, leafX-190, leafY+125)
  line(leafX-210, leafY+100, leafX-175, leafY+75)
  line(leafX-195, leafY+100, leafX-165, leafY+120)
  line(leafX-180, leafY+100, leafX-150, leafY+90)
  
  stroke(105, 76, 46)
  // branch
  fill(110, 84, 59)
  rect(-5, 160, 410, 80, 10);
  // branch details
  strokeWeight(15)
  stroke(99, 73, 46)
  line(-5, 180, 180, 180)
  line(200, 225, 400, 225)
  stroke(102, 73, 45)
  line(170, 205, 290, 205)
  stroke(102, 72, 43)
  line(250, 180, 380, 180)
  line(20, 215, 130, 215)
  stroke('black')
  
  if (mainX<20) {
    bmove = 1}
  if (mainX>380) {
    bmove = -1
  }
    strokeWeight(0);
    fill('black');
  
  if (bmove==1) {
    // head
    arc(mainX+20, 200, 30, 30, PI+HALF_PI, HALF_PI);
    // antennas
    strokeWeight(4);
    line(mainX+30, 195, mainX+50, 185);
    line(mainX+30, 208, mainX+52, 215);
    
  }
  if(bmove == -1) {
    // head
    arc(mainX-23, 202, 30, 30, HALF_PI, PI+HALF_PI);
    // antennas
    strokeWeight(4);
    line(mainX-50, 185, mainX-30, 195);
    line(mainX-50, 215, mainX-30, 208);
  }
    mainX=mainX+bmove;
    // body
    strokeWeight(0);
    fill('black');
    circle(mainX, 200, 50);
    // legs
    strokeWeight(4);
    line(mainX, 215, mainX-30, 170); // top left
    line(mainX-5, 185, mainX-5, 165); // top middle
    line(mainX+10, 185, mainX+20, 170); // top right
    line(mainX-25, 235, mainX-15, 220); // bottom left
    line(mainX, 240, mainX, 210); // bottom middle
    line(mainX+25, 235, mainX+8, 210); // bottom right
    // wings? red main part
    strokeWeight(0);
    fill(209, 31, 31);
    arc(mainX, 200, 50, 50, PI, TWO_PI);
    arc(mainX, 203, 50, 50, TWO_PI, PI);
    // spots
    fill('black');
    circle(mainX+8, 182, 7.5);
    circle(mainX-13, 190, 7.5);
    circle(mainX+15, 194, 7.5);
    circle(mainX, 196, 7.5);
    circle(mainX-2, 220, 7.5);
    circle(mainX+14, 211, 7.5);
    circle(mainX-16, 210, 7.5);
  
}
  // ── Your code ends here ────────────────────────────
