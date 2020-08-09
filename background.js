function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
    img = new Image();
    img.src = "lib/pic/day01.png";
}

function draw() {
	background('#99CCFF');
    drawingContext.drawImage(img,0,290, img.width / 10, img.height / 10);
}




