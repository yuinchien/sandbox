var colors = {'triangle':'#FF4E42', 'rectangle':"#FFA400", "circle": "#0CCE6B"};
var types = Object.keys(colors);
var shapes = [];
var darkmode = false;

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

	this.save = function(from, to, step) {
		this.path.interpolate(this.paths[from], this.paths[to], step);
		if(this.fill) {
			this.path.fillColor = '#000';
		}
		this.path.strokeColor = '#000';
	}

  this.update = function() {
    this.from = this.to;
    this.to = this.pickDiffShape(this.from);
    this.scale = this.updateScale();

    var config = { step: 0 };
		var me = this;
		return;
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

	var background = new Path.Rectangle({
		point: new Point(0,0),
		size: view.size,
		fillColor: darkmode ? '#212121' : '#fff'
	});

	// var cells = [20, 30, 40, 50, 60, 80, 100, 120, 160, 200, 240, 320, 360, 480, 560, 600, 640, 720];
	var cells = [720];
	// var cells = [640, 720];
	var cell = cells[ Math.floor(Math.random()*cells.length) ];
	var cols = Math.floor(paper.view.size.width / cell);
	var rows = Math.floor(paper.view.size.height / cell);
	cols = Math.max(cols, 1);
	rows = Math.max(rows, 1);
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

			for(var k=0; k<=10; k++) {
				shape.save('circle', 'triangle', 1/10*k);
			}

		}
	}

	downloadAsSVG();
}

// var counter = 0;
// function onFrame(event) {
//   counter += 1;
//
// 	if(counter%480==0) {
// 		counter == 0;
// 		darkmode = Math.random() > .5;
// 		init();
// 	}
//
//   if(counter%80==0 && counter!=0) {
// 		for(var i=0; i<shapes.length; i++) {
// 			var chance = 0.8 * 1 / Math.sqrt(shapes.length) + 0.4;
// 			if(Math.random()<chance) {
// 				shapes[i].update();
// 			}
// 		}
//   }
// }

function downloadAsSVG(fileName) {
	if(!fileName) {
		fileName = "shape.svg"
	}

	var url = "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({asString:true}));

	var link = document.createElement("a");
	link.download = fileName;
	link.href = url;
	link.click();
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
