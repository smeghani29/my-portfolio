// in half screen mode: w=723, h=626
// in full screen mode: w=1447, h=660

// this declares the variables
var horsey, horsex;
var hatx, hatx2, hatx3;
var tumble, tumble2, tumble3; 
var gameLost, gameWon;
var randomHat, randomTumble, hatCount;
var endHat, endHat2;
var horseLane = 2;
var endHatCollision, endHat2Collision; 
var winSound, loseSound;
var windowWidth, windowHeight;

function setup() {
	let canvas = createCanvas(600, 400);
    canvas.parent('sketch-container');
	background(171, 156, 133);
	windowWidth = 600;
	windowHeight = 400;
	horsey = windowHeight/3+(windowHeight/30);
	horsex = 20;
	hatx = windowWidth;
	hatx2 = windowWidth;
	hatx3 = windowWidth;
	tumble = windowWidth+200;
	tumble2 = windowWidth+500;
	tumble3 = windowWidth+330;
	gameLost = false;
	gameWon = false;
	hatCount = 0;
	finishx = windowWidth-150;
	endHatCollision = false;
	endHat2Collision = false;
}

// this preloads the images
function preload() {
	horse = loadImage("horse.png");
	hat = loadImage("cowboyhat2.png");
	tumbleweed = loadImage("tumbleweed3.png");
	finish = loadImage("finish4.png");
	// sounds are from: https://pixabay.com/sound-effects/search/
	winSound = loadSound("successSound.mp3");
	loseSound = loadSound("gameOver.mp3");
}

function draw() {
	// this makes it so that if the hat count reaches a specific number it switches the scene to the finish line
	if (hatCount >= 5) {
		stroke(97, 78, 57);
		fill(171, 156, 133);
		strokeWeight(5);
		rect(-2, 0, windowWidth+5, windowHeight/3);
		rect(-2, windowHeight/3, windowWidth+5, windowHeight/3);
		rect(-2, 2*(windowHeight/3), windowWidth+5, windowHeight/3);
		if (endHatCollision === false) {
			endHat = finishx-900;
		}
		if (endHat2Collision === false) {
			endHat2 = finishx;
		}
		finishLine();
		image(finish, finishx, 5, windowHeight-15, windowHeight-15);
		if (finishx >= windowWidth/2) {
			finishx-=3.75;
		}
		if (finishx <= windowWidth/2+2 && horsex <= windowWidth/2+400) {
			horsex+=1.8;
		} 
		counter();
		image(horse, horsex, horsey, 200, 170);
		gameIsLost();
		gameIsWon();
	} else {
		// this draws the main scene
		stroke(97, 78, 57);
		strokeWeight(5);
		fill(171, 156, 133);
		rect(-2, 0, windowWidth+5, windowHeight/3);
		rect(-2, windowHeight/3, windowWidth+5, windowHeight/3);
		rect(-2, 2*(windowHeight/3), windowWidth+5, windowHeight/3);
		counter();
		hats();
		tumbleweeds();
		gameIsWon();
		gameIsLost();
		gameIsLost2();
		image(horse, horsex, horsey, 200, 170);
		randomHat = random(windowWidth, windowWidth+1000);
		randomTumble = random(windowWidth, windowWidth+1000);
	}
}

function hats() {
	// this function draws the hats and all the code that is related to them
	image(hat, hatx, windowHeight/6-40, 140, 80);
	if(hatx > -200) {
		hatx-=5;
	}
	
	if(hatx <= -200) {
		hatx = randomHat;
	} 
	 if(horseLane === 1 && hatx < horsex+130 && hatx > horsex) {
		hatx = randomHat; 
		hatCount++
		 if(gameLost === false) {
			winSound.play();
		}
	}
	image(hat, hatx2, 3*(windowHeight/6)-40, 140, 80);
	if(hatx2 > -200) {
		hatx2-=5;
	}
	if(hatx2 <= -200) {
		hatx2 = randomHat;
	} 
	if(horseLane === 2 && hatx2 < horsex+130 && hatx2 > horsex) {
		hatx2 = randomHat;
		hatCount++;
		if(gameLost === false) {
			winSound.play();
		}
	}
	image(hat, hatx3, windowHeight-(windowHeight/4.5), 140, 80);
	if(hatx3 > -200) {
		hatx3-=5;
	}
	if (hatx3 <= -200) {
		hatx3 = randomHat;
	}
	if(horseLane === 3 && hatx3 < horsex+130 && hatx3 > horsex) {
		hatx3 = randomHat;
		hatCount++;
		if(gameLost === false) {
			winSound.play();
		}
	}
}

function tumbleweeds() {
	// this draws the tumbleweeds and the code for when you interact with them
	image(tumbleweed, tumble, windowHeight/6-40, 100, 100);
	if(tumble > -200) {
		tumble-=5;
	}
	if(tumble <= -200) {
		tumble = randomTumble;
	}
	image(tumbleweed, tumble2, 3*(windowHeight/6)-40, 100, 100);
	if(tumble2 > -200) {
		tumble2-=5;
	}
	if(tumble2 <= -200) {
		tumble2 = randomTumble;
	}
	image(tumbleweed, tumble3, windowHeight-(windowHeight/4.5), 100, 100);
	if(tumble3 > -200) {
		tumble3-=5;
	}
	if(tumble3 <= -200) {
		tumble3 = randomTumble;
	}
}

function counter() {
	// this draws the hat counter
	fill('white');
	strokeWeight(2);
	rect(windowWidth-(((windowHeight/3+(windowHeight/30))/2)+20), 10, (windowHeight/3+(windowHeight/30))/2, (windowHeight/3+(windowHeight/30))/6);
	noStroke();
	fill('black');
	textSize((windowHeight/3+(windowHeight/30))/13);
	text('hat count: ' + hatCount, windowWidth-(((windowHeight/3+(windowHeight/30))/2+10)), 36);
}

function gameIsWon() {
	// this draws the game won screen
	if (finishx >= windowWidth/2-2 && horsex >= windowWidth/1.2874) {
		setTimeout(() => {
			gameWon = true;
		}, 1000);
		}
	
	if (gameWon === true) {
		stroke(97, 78, 57);
		fill(171, 156, 133);
		strokeWeight(5);
		rect(-2, 0, windowWidth+5, windowHeight/3);
		rect(-2, windowHeight/3, windowWidth+5, windowHeight/3);
		rect(-2, 2*(windowHeight/3), windowWidth+5, windowHeight/3);
		strokeWeight(1);
		stroke(0, 0, 0);
		fill(0, 0, 0);
		textSize(75);
		text('Great Job!', windowWidth/2-100, windowHeight/2);
		image(horse, windowWidth/10, windowHeight/3+(windowHeight/30), 200, 170);
		textSize(25);
		text('Character design by Elizabeth Kung', windowWidth/2-100, 3*windowHeight/4);
		text('Theme idea by Greer Frank', windowWidth/2-100, (3*windowHeight/4)+50);
	}
}

function gameIsLost2() {
	// this has the code for when to draw the game lost screen
	if (gameWon) {
		return;
	}
	if(horseLane === 1 && tumble < horsex+130 && tumble > horsex+30) {
		gameLost = true;
	}	
	if(horseLane === 2 && tumble2 < horsex+130 && tumble2 > horsex+30) {
		gameLost = true;
	}	
	if(horseLane === 3 && tumble3 < horsex+130 && tumble3 > horsex+30) {
		gameLost = true;
	}	
}

function gameIsLost() {
	// this draws the game lost screen 
	if (gameLost === true) {
		loseSound.play();
		background(191, 19, 19);
		strokeWeight(1);
		stroke(0, 0, 0);
		fill(0, 0, 0);
		textSize(75);
		text('Game Over!', windowWidth/2-100, windowHeight/2);
		horsex = windowWidth/10
		horsey = windowHeight/3+(windowHeight/30);
	}
}

function finishLine() {
	// this draws the logic for the finish line screen
	if(endHatCollision === false && horseLane === 1 && endHat < horsex+130 && endHat > horsex) {
		hatCount++
		endHat = -200
		endHatCollision = true;
	}
	image(hat, endHat, windowHeight/6-40, 140, 80);
	
	image(tumbleweed, finishx-400, windowHeight/6-40 , 100, 100);
	if(horseLane === 1 && finishx-400 < horsex+130 && finishx-400 > horsex+30) {
		gameLost = true;
	}	

	if(endHat2Collision === false && horseLane === 2 && endHat2 < horsex+130 && endHat2 > horsex) {
		hatCount++
		endHat2 = -200
		endHat2Collision = true;
	}
	image(hat, endHat2, 3*(windowHeight/6)-40, 140, 80);
	image(tumbleweed, finishx-650, windowHeight-(windowHeight/4.5), 100, 100);
	if(horseLane === 3 && finishx-650 < horsex+130 && finishx-650 > horsex+30) {
		gameLost = true;
	}	
}

function keyPressed() {
	// this makes the horse move with the arrow keys 
	if(keyCode === UP_ARROW && horsey > windowHeight/3){
		horsey -= windowHeight/3;
		horseLane--;
	}
	if(keyCode === DOWN_ARROW && horsey < windowHeight-windowHeight/3){
		horsey += windowHeight/3;
		horseLane++;
	}
	if(keyCode === RIGHT_ARROW && horsex < windowWidth/1.5){
		horsex +=15;
	}
	if(keyCode === LEFT_ARROW && horsex > 20){
		horsex -=15;
	}
}
