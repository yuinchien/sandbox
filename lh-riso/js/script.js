var shapes = [];

let blueChannel; //declare riso object
let magentaChannel;

function setup(){
  createCanvas(11*72, 17*72);
	background(250);
	magentaChannel = new Riso("fluorescentpink");
	magentaChannel.fill(256*.9);
	magentaChannel.ellipse(200,200,100,100);

  blueChannel = new Riso("lightteal"); // instantiate riso object as blue layer
  blueChannel.fill(256*.9); //set opacity
  blueChannel.rect(20, 20, 100, 100); //draw rect to blue layer

  drawRiso(); //draw to screen
}

function mouseClicked() {
  exportRiso();
}
