import { reach } from "./reach.js";

const ZOOMIN_LEVEL = 1.15;

function ShaderImage(canvas, color) {
  this.color = color;
  this.canvas = canvas;
  this.sandbox = this.initSandbox();

  this.follower = { x: 0, y: 0, vx: 0, vy: 0 };
  this.followerSpring = null;

  this.zoom = {level: 1.0};
  this.tweenZoom = null;

  this.canvas.onmousemove = this.onMouseMove.bind(this);
  this.canvas.onmouseenter = this.onMouseEnter.bind(this);
  this.canvas.onmouseleave = this.onMouseLeave.bind(this);
}

ShaderImage.prototype.initSandbox = function() {

  var sandbox = new GlslCanvas(this.canvas);

  var string_frag_code = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec3 u_color;
uniform float u_zoom;
uniform float u_time;
uniform sampler2D u_tex0;

uniform vec2 u_velocity;

float luma(vec3 color) {
return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}

float dither4x4(vec2 position, float brightness) {
int x = int(mod(position.x, 4.0));
int y = int(mod(position.y, 4.0));
int index = x + y * 4;
float limit = 0.0;

if (x < 8) {
if (index == 0) limit = 0.0625;
if (index == 1) limit = 0.5625;
if (index == 2) limit = 0.1875;
if (index == 3) limit = 0.6875;
if (index == 4) limit = 0.8125;
if (index == 5) limit = 0.3125;
if (index == 6) limit = 0.9375;
if (index == 7) limit = 0.4375;
if (index == 8) limit = 0.25;
if (index == 9) limit = 0.75;
if (index == 10) limit = 0.125;
if (index == 11) limit = 0.625;
if (index == 12) limit = 1.0;
if (index == 13) limit = 0.5;
if (index == 14) limit = 0.875;
if (index == 15) limit = 0.375;
}

return brightness < limit ? 0.0 : 1.0;
}

vec3 dither4x4(vec2 position, vec3 color) {
return color * dither4x4(position, luma(color));
}

vec4 dither4x4(vec2 position, vec4 color) {
return vec4(color.rgb * dither4x4(position, luma(color)), 1.0);
}

float dither8x8(vec2 position, float brightness) {
int x = int(mod(position.x, 8.0));
int y = int(mod(position.y, 8.0));
int index = x + y * 8;
float limit = 0.0;

if (x < 8) {
if (index == 0) limit = 0.015625;
if (index == 1) limit = 0.515625;
if (index == 2) limit = 0.140625;
if (index == 3) limit = 0.640625;
if (index == 4) limit = 0.046875;
if (index == 5) limit = 0.546875;
if (index == 6) limit = 0.171875;
if (index == 7) limit = 0.671875;
if (index == 8) limit = 0.765625;
if (index == 9) limit = 0.265625;
if (index == 10) limit = 0.890625;
if (index == 11) limit = 0.390625;
if (index == 12) limit = 0.796875;
if (index == 13) limit = 0.296875;
if (index == 14) limit = 0.921875;
if (index == 15) limit = 0.421875;
if (index == 16) limit = 0.203125;
if (index == 17) limit = 0.703125;
if (index == 18) limit = 0.078125;
if (index == 19) limit = 0.578125;
if (index == 20) limit = 0.234375;
if (index == 21) limit = 0.734375;
if (index == 22) limit = 0.109375;
if (index == 23) limit = 0.609375;
if (index == 24) limit = 0.953125;
if (index == 25) limit = 0.453125;
if (index == 26) limit = 0.828125;
if (index == 27) limit = 0.328125;
if (index == 28) limit = 0.984375;
if (index == 29) limit = 0.484375;
if (index == 30) limit = 0.859375;
if (index == 31) limit = 0.359375;
if (index == 32) limit = 0.0625;
if (index == 33) limit = 0.5625;
if (index == 34) limit = 0.1875;
if (index == 35) limit = 0.6875;
if (index == 36) limit = 0.03125;
if (index == 37) limit = 0.53125;
if (index == 38) limit = 0.15625;
if (index == 39) limit = 0.65625;
if (index == 40) limit = 0.8125;
if (index == 41) limit = 0.3125;
if (index == 42) limit = 0.9375;
if (index == 43) limit = 0.4375;
if (index == 44) limit = 0.78125;
if (index == 45) limit = 0.28125;
if (index == 46) limit = 0.90625;
if (index == 47) limit = 0.40625;
if (index == 48) limit = 0.25;
if (index == 49) limit = 0.75;
if (index == 50) limit = 0.125;
if (index == 51) limit = 0.625;
if (index == 52) limit = 0.21875;
if (index == 53) limit = 0.71875;
if (index == 54) limit = 0.09375;
if (index == 55) limit = 0.59375;
if (index == 56) limit = 1.0;
if (index == 57) limit = 0.5;
if (index == 58) limit = 0.875;
if (index == 59) limit = 0.375;
if (index == 60) limit = 0.96875;
if (index == 61) limit = 0.46875;
if (index == 62) limit = 0.84375;
if (index == 63) limit = 0.34375;
}

return brightness < limit ? 0.0 : 1.0;
}

vec3 dither8x8(vec2 position, vec3 color) {
return color * dither8x8(position, luma(color));
}

vec4 dither8x8(vec2 position, vec4 color) {
return vec4(color.rgb * dither8x8(position, luma(color)), 1.0);
}

vec2 centeredAspectRatio(vec2 uvs, vec2 factor){
return uvs * factor - factor /2. + 0.5;
}

void main() {

vec2 st = gl_FragCoord.xy/u_resolution.xy;
/* st = centeredAspectRatio(st, u_factor); */

vec2 normalizedPos = u_mouse / u_resolution;

vec2 vel = u_velocity;
float dist = distance(normalizedPos + vel / u_resolution, st.xy);
float ratio = clamp(1.0 - dist * 5., 0., 1.);
st.x -= cos(st.y) * ratio / 100. * (vel.x + vel.y) / 5.;
st.y -= cos(st.x) * ratio / 100. * (vel.x + vel.y) / 5.;

st -= normalizedPos;
st /= u_zoom;
st += normalizedPos;

vec4 color = texture2D(u_tex0, st );
color = dither8x8(gl_FragCoord.xy, color);
float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
vec3 duotone = mix(u_color, vec3(1.0), gray*2.0);

gl_FragColor =  vec4(duotone, 1.0);
}
`;

  sandbox.load(string_frag_code);
  sandbox.setUniform("u_color",this.color.r/255,this.color.g/255,this.color.b/255);
  sandbox.setUniform("u_velocity",6,6);
  sandbox.setUniform("u_zoom", 1.0);
  return sandbox;
}

ShaderImage.prototype.onMouseEnter = function(ev) {
  const _this = this;
  if(this.tweenZoom) {
    this.tweenZoom.kill();
    this.tweenZoom = null;
  }

  this.tweenZoom = new TweenMax(this.zoom, .5, {level: ZOOMIN_LEVEL, ease: Power4.easeOut, onUpdate: function(){
    _this.sandbox.setUniform("u_zoom", _this.zoom.level);
  }});
}
ShaderImage.prototype.onMouseLeave = function(ev) {
  const _this = this;
  if(this.tweenZoom) {
    this.tweenZoom.kill();
    this.tweenZoom = null;
  }
  this.tweenZoom = new TweenMax(this.zoom, .5, {level:1.0, ease: Power4.easeOut, onUpdate: function(){
    _this.sandbox.setUniform("u_zoom", _this.zoom.level);
  }});
}

ShaderImage.prototype.onMouseMove = function(ev) {

  if (this.followerSpring) {
    this.followerSpring.stop();
    this.followerSpring = null;
  }

  this.followerSpring = reach({
    from: { x: this.follower.x, y: this.follower.y },
    to: { x: ev.clientX, y: ev.clientY },
    velocity: { x: this.follower.vx, y: this.follower.vy },
    stiffness: 500,
    damping: 50,
    mass: 1,
  }).start({
    update: position => {
      const velocity = {
        x: position.x - this.follower.x,
        y: position.y - this.follower.y
      };
      this.sandbox.setUniform("u_velocity",velocity.x,velocity.y);
      this.follower = {
        x: position.x,
        y: position.y,
        vx: velocity.x,
        vy: velocity.y
      };
    },
    complete: () => {
      this.sandbox.setUniform("u_velocity",0,0);
      this.follower.vx = 0;
      this.follower.vy = 0;
      this.follower.x = 0;
      this.follower.y = 0;
    }
  });

};


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const colors = ['#ff5252', '#0056B7', '#336252', '#34398A', '#FD68B9', '#444444', '#27AE60', '#2B5059', '#FE7503', '#EB4303', '#516B73', '#213F85', '#29533D', '#FB396C', '#00AB98'];
// const colors = ['#ff5252'];

const main = document.getElementById('main');
const shaderImages = [];

data.forEach(function(content){

  const color = colors[ Math.floor( Math.random()*colors.length ) ];
  const name = content.name.split('.')[0];
  const canvasID = `glslCanvas-${name}`;
  const top = Math.ceil( Math.random() * 100 + 20);
  const bottom = Math.ceil( Math.random() * 100 + 20);

  const markup = `
 <div id="wrapper-${name}" class="hide wrapper" style="padding-top:${top}%;padding-bottom:${bottom}%;">
  <canvas data-textures="images/${content.name}" width="600" height="800" color="${color}" id="${canvasID}"></canvas>
  <div class="artist">${content.artist}</div>
  <div class="location">&#8212${content.location}, ${content.city}</div>
 </div>
`;
  main.insertAdjacentHTML( 'beforeend', markup );

  var newImg = new Image;
  newImg.onload = function() {
    var canvas = document.getElementById(canvasID);
    canvas.width = this.width / 2;
    canvas.height = this.height / 2;
    const shaderImage = new ShaderImage(canvas, hexToRgb(color));
    shaderImages.push(shaderImage);
  }
  newImg.src = 'images/' + content.name;
});


let wrappers = document.querySelectorAll('.wrapper');

if ('IntersectionObserver' in window) {
  // IntersectionObserver Supported
  let config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };

  let observer = new IntersectionObserver(onChange, config);
  wrappers.forEach(wrapper => observer.observe(wrapper));

  function onChange(changes, observer) {
    changes.forEach(change => {
      if (change.intersectionRatio > 0) {
        // Stop watching and load the image
        // loadImage(change.target);
        observer.unobserve(change.target);
        change.target.classList.remove('hide');
      }
    });
  }
}
