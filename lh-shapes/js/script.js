var colors = {"triangle":'#FF4E42', "rectangle":"#FFB511", "circle": "#0CCE6B"};
var colors700 = {"triangle": "#FF5252", "rectangle":"#FF6C2F", "circle": "#407060"};

var types = Object.keys(colors);
var shapes = [];
var myShape = null;
var darkmode = false;
var duration = 400;
init();

function Shape(center, r, fill) {
	this.fill = fill;
	this.center = center;

  var size = new Size(r, r);
  this.path = new Path.Rectangle({
    point: center - size/2,
    size: size,
		shadowColor: new Color(255,255,255),
    shadowBlur: r/20,
    shadowOffset: new Point(0, 0)
  });
  this.path.strokeWidth = 0;//Math.ceil( r/8 );

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
	this.scale700 = null;

	this.background = new Path.Rectangle({
		point: new Point(0,0),
		size: view.size,
		fillColor: {
			gradient: {
        stops: [ chroma(colors700[this.to]).alpha(0.2).hex(), colors700[this.to]]
      },
			origin: new Point(0,0),
      destination: view.size
		}
	});

	this.background.sendToBack();

  this.update = function() {
    this.from = this.to;
    this.to = this.pickDiffShape(this.from);
    this.scale = this.updateScale();
		this.scale700 = this.updateScale700();

    var config = { step: 0, gradientStep: 0 };
		var me = this;

    anime({
      targets: config,
      step: 100,
      round: 1,
      duration: duration,
      // easing: 'linear',
      // easing: 'cubicBezier(.5, .05, .1, .3)',
      easing: 'easeInOutSine',
      update: function() {
        var hex = me.scale(config.step/100).hex();
        me.path.interpolate(me.paths[me.from], me.paths[me.to], config.step/100);
        me.path.fillColor = hex;
        // me.path.strokeColor = hex;
				me.path.shadowColor = hex;
			}
    });

		anime({
			targets: config,
			gradientStep: 100,
			round: 1,
			duration: duration*1.5,
			// easing: 'linear',
			// easing: 'cubicBezier(.5, .05, .1, .3)',
			easing: 'easeInOutSine',
			update: function() {
				var hex = me.scale700(config.gradientStep/100).hex();
				var gradient = new Gradient([ chroma(hex).alpha(0.2).hex(), hex]);
				var gradientColor = new Color(gradient, new Point(view.size.width/2,0), new Point(view.size.width/2, view.size.height));
				me.background.fillColor = gradientColor;
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

	this.updateScale700 = function() {
		return chroma.scale([colors700[this.from], colors700[this.to]]).mode('lab');
	}

}

function init() {
	var cell = Math.min(paper.view.size.width, Math.floor(paper.view.size.height));
	var r = cell * .7;
	myShape = new Shape(paper.view.center, r, 1);
	myShape.update();
}

var counter = 0;
function onFrame(event) {
  counter += 1;
  if(counter%80==0) {
		myShape.update();
		counter = 0;
  }
}

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
