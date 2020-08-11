let bugs = [];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
    img = new Image();
    img.src = "lib/pic/me07.png";
	
	for (let i = 0; i < 20; i++) {
    bugs.push(new Jitter());
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

  display() {
    drawingContext.drawImage(img,this.x, this.y, this.diameter, this.diameter);
  }
}


