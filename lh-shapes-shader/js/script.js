const colors = ['#FF4E42', '#FFA400', '#0CCE6B'];
const main = document.getElementById('main');
// const artist = document.getElementById('artist');
// const place = document.getElementById('place');
// const city = document.getElementById('city');
// const date = document.getElementById('date');
// const paging = document.getElementById('paging');
const canvas = document.getElementById('glslCanvas');
// const data = shuffle(_data);

let poster = null;

function Poster(canvas) {
  this.canvas = canvas;
  this.color = null;
  this.sandbox = this.initSandbox();
}

Poster.prototype.update = function(color) {

  // this.sandbox.setUniform("u_texture", file);

  if(this.color==null) {
    this.color = color;
  }
  const me = this;
  const scale = chroma.scale([this.color, color]);
  this.color = color;
  var percent = {number: 0};
  anime({
    targets: percent,
    duration: 1200,
    number: 1,
    round: 10,
    easing: 'easeOutExpo',
    update: function() {
      var rgb = scale(percent.number).rgb();
      me.sandbox.setUniform("u_color", rgb[0]/255, rgb[1]/255, rgb[2]/255);
    }
  });

}

Poster.prototype.initSandbox = function() {

  var sandbox = new GlslCanvas(this.canvas);

  var string_frag_code = `
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec3 u_color;
uniform float u_time;
// uniform sampler2D u_texture;

// Modified from https://thebookofshaders.com/edit.php?log=160414040957 by @kynd
float smoothedge(float v) {
    return smoothstep(0.0, 1.0 / u_resolution.x, v);
}

float circle(vec2 p, float radius) {
  return length(p) - radius;
}

float rect(vec2 p, vec2 size) {
  vec2 d = abs(p) - size;
  return min(max(d.x, d.y), 0.0) + length(max(d,0.0));
}

float roundRect(vec2 p, vec2 size, float radius) {
  vec2 d = abs(p) - size;
  return min(max(d.x, d.y), 0.0) + length(max(d,0.0))- radius;
}

float hexagon(vec2 p, float radius) {
    vec2 q = abs(p);
    return max(abs(q.y), q.x * 0.866025 + q.y * 0.5) - radius;
}

float triangle(vec2 p, float size) {
    vec2 q = abs(p);
    return max(q.x * 0.866025 + p.y * 0.5, -p.y * 0.5) - size * 0.5;
}

float ellipse(vec2 p, vec2 r, float s) {
    return (length(p / r) - s);
}

float capsule(vec2 p, vec2 a, vec2 b, float r) {
    vec2 pa = p - a, ba = b - a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h ) - r;
}

//http://thndl.com/square-shaped-shaders.html
float polygon(vec2 p, int vertices, float size) {
    float a = atan(p.x, p.y) + 0.2;
    float b = 6.28319 / float(vertices);
    return cos(floor(0.5 + a / b) * b - a) * length(p) - size;
}

float getShape(vec2 st, int i) {
    if (i == 0) {
        return circle(st, 0.4);
    } else if (i == 1) {
        return rect(st, vec2(0.42, 0.42));
    } else if (i == 2) {
        return triangle(st, 0.4);
    } else {
        return circle(st, 0.38);
    }
}

float luma(vec3 color) {
return dot(color, vec3(0.299, 0.587, 0.114));
}

float luma(vec4 color) {
return dot(color.rgb, vec3(0.299, 0.587, 0.114));
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

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main() {

vec2 st = gl_FragCoord.xy/u_resolution.xy;

st.x *= u_resolution.x / u_resolution.y;
st.x += (1.0-u_resolution.x / u_resolution.y) / 2.0;

vec2 stTexture = gl_FragCoord.xy/u_resolution.xy;
stTexture.x *= u_resolution.x / u_resolution.y;
stTexture.x += (1.0-u_resolution.x / u_resolution.y) / 2.0;

float t0 = mod(u_time * 1.5, 4.0);
float t1 = mod(u_time * 1.5 + 1.0, 4.0);
int i0 = int(floor(t0));
int i1 = int(floor(t1));
float f = fract(t0);

st -= vec2(0.5, 0.5);

st = rotate2d( sin(u_time/1.0)*PI ) * st;

float shape = smoothedge(mix(getShape(st, i0), getShape(st, i1), f));

vec2 p = -1.0 + 2.0 * stTexture;
float len = length(p);
stTexture = stTexture + (p/len)*cos(len*12.0-u_time*4.0)*0.005;

vec4 color = vec4(u_color, 0.8);
// color = dither8x8(gl_FragCoord.xy, color);
// float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
vec3 duotone = mix(u_color, vec3(1.0), 1.0);
vec3 finalColor = mix(duotone, u_color, shape);
gl_FragColor =  vec4(finalColor, 1.0);
// gl_FragColor = color;
}
`;

  // const file = `images/${data[0].name}`;
  // sandbox.setUniform("u_texture", file);
  sandbox.load(string_frag_code);
  return sandbox;
}

let timer = 0;
// let dataIndex = 0;

function updateImage() {

  if(timer%150==0) {
    // const _data = data[dataIndex];
    const color = colors[ Math.floor( Math.random()*colors.length ) ];
    console.log('updateImage', color);
    poster.update(color);
    // dataIndex++;
    // if(dataIndex==data.length) {
    //   dataIndex = 0;
    // }
  }
  timer++;

  requestAnimationFrame(updateImage);
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function init() {
  const color = colors[ Math.floor( Math.random()*colors.length ) ];
  canvas.width = window.innerWidth*2;
  canvas.height = window.innerHeight*2;
  poster = new Poster(canvas, color);

  requestAnimationFrame(updateImage);
}

init();
