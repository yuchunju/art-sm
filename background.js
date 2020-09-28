let bugs = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


function setup() {
  canvas = createCanvas(windowWidth, 2600);
  canvas.position(0,0);
  canvas.style('z-index','-1');
    img = new Image();
    img.src = "lib/pic/me07.png";

	for (let i = 0; i < 95; i++) {
    bugs.push(new Jitter());
  }
}



function mousePressed() {
   for (let i = 0; i <95; i++) {
	  if(bugs[i].contains(mouseX, mouseY)){
		 bugs.splice(i, 1);
	 }
  }
}



function draw() {
	background('#99CCFF');

	for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(50, 80);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  contains(px, py) {
	  let d = dist(px, py, this.x, this.y);
	  if (d < this.diameter) {
		  return true;
		  } else {
		  return false;
			  }
	  }


  display() {
    drawingContext.drawImage(img,this.x, this.y, this.diameter, this.diameter);
  }
}
