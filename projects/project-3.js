let l1, s1, l2, s2, l3, s3, l4, s4, l5, s5, l6, s6;
let bg;

// randomized the color of the background each time the program is run
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
  colorMode(HSB);
  bg = random(0, 360);
}

// using a switch case to toggle the lights depending on which key is pressed
// order: 2, 4, 5, 3, 6, 1, 3
function keyPressed() {
  switch (key) {
    case "1":
      l1 = !l1;
      l3 = !l3;
      break;
    case "2":
      l1 = !l1;
      l4 = !l4;
      break;
    case "3":
      l4 = !l4;
      l6 = !l6;
      break;
    case "4":
      l2 = !l2;
      l6 = !l6;
      break;
    case "5":
      l2 = !l2;
      l5 = !l5;
      break;
    case "6":
      l1 = !l1;
      l2 = !l2;
      break;
    default:
      s1 = 0;
      s2 = 0;
      s3 = 0;
      s4 = 0;
      s5 = 0;
      s6 = 0;
      break;
  }
}

// using ternary to make the light turn yellow/on when it is true
function draw() {
  l1 === true ? (s1 = 30) : (s1 = 0);
  l2 === true ? (s2 = 30) : (s2 = 0);
  l3 === true ? (s3 = 30) : (s3 = 0);
  l4 === true ? (s4 = 30) : (s4 = 0);
  l5 === true ? (s5 = 30) : (s5 = 0);
  l6 === true ? (s6 = 30) : (s6 = 0);

  // draws the random background, switches, and lights
  background(bg, 7, 91);
  stroke(0, 0, 0);
  strokeWeight(1);
  textSize(35);
  fill(45, 17, 18);
  rect(280, 150, 30, 10, 10);
  rect(250, 190, 30, 10, 10);
  rect(280, 240, 30, 10, 10);
  rect(250, 280, 30, 10, 10);
  rect(280, 340, 30, 10, 10);
  rect(275, 100, 10, 300, 10);
  fill(50, s1, 95);
  circle(280, 95, 38);
  fill(50, s2, 95);
  circle(310, 150, 36);
  fill(50, s3, 95);
  circle(250, 190, 36);
  fill(50, s4, 95);
  circle(310, 240, 36);
  fill(50, s5, 95);
  circle(250, 280, 36);
  fill(50, s6, 95);
  circle(310, 340, 36);
  fill(0, 0, 100);
  rect(20, 30, 50, 90);
  rect(30, 40, 30, 70);
  rect(85, 30, 50, 90);
  rect(95, 40, 30, 70);
  rect(150, 30, 50, 90);
  rect(160, 40, 30, 70);
  rect(20, 130, 50, 90);
  rect(30, 140, 30, 70);
  rect(85, 130, 50, 90);
  rect(95, 140, 30, 70);
  rect(150, 130, 50, 90);
  rect(160, 140, 30, 70);
  fill(10);
  text("1", 35, 88);
  text("2", 100, 88);
  text("3", 165, 88);
  text("4", 35, 188);
  text("5", 100, 188);
  text("6", 165, 188);

  // if all the lights are on/true it plays this new scene to inform the player that they have won the game
  if (
    l1 === true &&
    l2 === true &&
    l3 === true &&
    l4 === true &&
    l5 === true &&
    l6 === true
  ) {
    background(218, 10, 92);
    textSize(70);
    stroke(0, 0, 0);
    fill(360, 0, 0);
    text("YOU WIN!", 35, 85);

    // draws the balloons
    strokeWeight(3);
    stroke(0, 0, 0);
    line(80, 240, 75, 330);
    strokeWeight(0);
    fill(350, 56, 98);
    ellipse(80, 180, 75, 100);
    triangle(80, 220, 65, 245, 95, 245);
    fill(350, 45, 100);
    ellipse(62, 160, 10, 25);
    strokeWeight(3);
    stroke(350, 45, 100);
    line(75, 230, 85, 230);
    strokeWeight(2.5);
    stroke(0, 0, 0);
    line(178, 240, 188, 350);
    strokeWeight(0);
    fill(40, 74, 95);
    ellipse(180, 210, 65, 85);
    triangle(180, 245, 170, 265, 190, 265);
    fill(40, 70, 100);
    ellipse(165, 195, 10, 25);
    strokeWeight(2.5);
    stroke(40, 70, 100);
    line(175, 253, 185, 253);
    strokeWeight(3);
    stroke(0, 0, 0);
    line(300, 260, 295, 350);
    strokeWeight(0);
    fill(173, 51, 70);
    ellipse(300, 200, 75, 100);
    triangle(300, 240, 285, 265, 315, 265);
    fill(173, 45, 75);
    ellipse(282, 180, 10, 25);
    strokeWeight(3);
    stroke(173, 45, 75);
    line(295, 250, 305, 250);

    // draws the confetti!
    stroke(277, 30, 66);
    fill(277, 30, 66);
    circle(100, 120, 8);
    circle(350, 280, 8);
    circle(250, 370, 8);
    circle(130, 230, 8);
    circle(40, 350, 8);
    stroke(318, 39, 83);
    fill(318, 39, 83);
    circle(20, 190, 8);
    circle(250, 150, 8);
    circle(150, 310, 8);
    circle(360, 360, 8);
    stroke(206, 30, 62);
    fill(206, 30, 62);
    circle(270, 270, 8);
    circle(370, 120, 8);
    circle(60, 270, 8);
    circle(150, 160, 8);
    stroke(214, 4, 96);
    fill(2214, 4, 96);
    circle(220, 300, 8);
    circle(120, 380, 8);
    circle(190, 115, 8);
    circle(380, 200, 8);
  }
}
