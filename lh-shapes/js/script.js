
var colors = {'triangle':'#FF4E42', 'rectangle':"#FFA400", "circle": "#0CCE6B"};
var types = Object.keys(colors);
var shapes = [];

init();

function Shape(center, r, fill) {
	this.fill = fill;
	this.center = center;
  var size = new Size(r, r);
  this.path = new Path.Rectangle({
    point: center - size/2,
    size: size,
  });
  this.path.strokeWidth = Math.ceil( r/8 );
  // this.path.fullySelected = true;

  this.paths = {};

  var triangle = this.path.clone();
  triangle.segments[1].point.x = center.x;
  triangle.segments[2].point.x = center.x;
  triangle.segments[3].point.y = triangle.segments[3].point.y - r*0.04;
  triangle.segments[0].point.y = triangle.segments[0].point.y - r*0.04
  triangle.opacity = 0;
  triangle.scale(1.11);
  this.paths['triangle'] = triangle;

  var rectangle = this.path.clone();
  rectangle.opacity = 0;
  this.paths['rectangle'] = rectangle;

  var circle = this.path.clone();
  circle.smooth({ type: 'geometric', factor: .55 });
  circle.opacity = 0;
  circle.scale(0.82);
  this.paths['circle'] = circle;

  this.from = types[Math.floor(types.length*Math.random())];
  this.to = types[Math.floor(types.length*Math.random())];
  this.scale = null;

  this.update = function() {
    this.from = this.to;
    this.to = this.pickDiffShape(this.from);
    this.scale = this.updateScale();

    var config = { step: 0 };
		var me = this;
    anime({
      targets: config,
      step: 100,
      round: 1,
      duration: 300,
      // easing: 'linear',
      // easing: 'cubicBezier(.5, .05, .1, .3)',
      easing: 'easeInOutSine',
      update: function() {
        var hex = me.scale(config.step/100).hex();
        me.path.interpolate(me.paths[me.from], me.paths[me.to], config.step/100);
				if(me.fill) {
	        me.path.fillColor = hex;
				}
        me.path.strokeColor = hex;
      }
    });
  };

  this.pickDiffShape = function(current) {
    var shuffled = shuffle(types.slice());
    for(var i=0; i<shuffled.length; i++) {
      if( shuffled[i]!=current ) {
        return shuffled[i];
      }
    }
  }

  this.updateScale = function() {
    return chroma.scale([colors[this.from], colors[this.to]]).mode('lab');
  }
}

function init() {
	project.clear();
	var cells = [30, 40, 50, 60, 80, 100, 120, 160, 200, 240, 320, 360, 480, 560, 600, 640];
	var cell = cells[ Math.floor(Math.random()*cells.length) ];
	var cols = Math.floor(paper.view.size.width / cell);
	var rows = Math.floor(paper.view.size.height / cell);
	var marginX = (paper.view.size.width - cols * cell)/2;
	var marginY = (paper.view.size.height - rows * cell)/2;
	shapes = [];

	for(var i=0; i<cols; i++) {
		for(var j=0; j<rows; j++) {
			var center = new Point(i*cell + cell/2 + marginX, j*cell + cell/2 + marginY);
			var r = cell * .4;
			var shape = new Shape(center, r, Math.random()>0.5);
			shapes.push(shape);
			shape.update();
		}
	}
}

var counter = 0;
function onFrame(event) {
  counter += 1;
  if(counter%80==0) {
		for(var i=0; i<shapes.length; i++) {
			if(Math.random()>.7) {
				shapes[i].update();
			}
		}
  }
	if(counter%400==0) {
		init();
		counter == 0;
	}
}

function shuffle(array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
