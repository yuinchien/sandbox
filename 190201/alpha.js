/*!
 * previewer.js v0.0.1
 * https://github.com/yuinchien/font
 *
 * Copyright (c) 2017 Yuin Chien
 *
 */
const CORNERS = ['borderTopLeftRadius','borderTopRightRadius','borderBottomRightRadius','borderBottomLeftRadius'];
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function Alpha(glyph, parent) {
	this.glyph = glyph.toUpperCase();
	this.shapes = {};
	this.shapes['A'] = ['1000', '0100', '0000', '0000', '0000', '0000', '0011', '0011'];
	this.shapes['B'] = ['0000', '0100', '0000', '0010', '0000', '0100', '0000', '0010'];
	this.shapes['C'] = ['1000', '0100', '0000',     '', '0000',     '', '0001', '0010'];
	this.shapes['D'] = ['0000', '0100', '0000', '0000', '0000', '0000', '0000', '0010'];
	this.shapes['E'] = ['1000', '0010', '0000', '0000', '0000',     '', '0001', '0000'];
	this.shapes['F'] = ['1000', '0010', '0000', '1111', '0000',     '', '0011',     ''];
	this.shapes['G'] = ['1000', '0010', '0000',     '', '0000', '1100', '0001', '0010'];
	this.shapes['H'] = ['1100',     '', '0000', '0100', '0000', '0000', '0011', '0011'];
	this.shapes['I'] = ['1111', '1111', '0000', '0000', '0000', '0000', '0000', '0000'];
	this.shapes['J'] = [    '', '1111',     '', '0000',     '', '0000', '0001', '0010'];
	this.shapes['K'] = ['1100', '1000', '0000', '0010', '0000', '0100', '0010', '0011'];
	this.shapes['L'] = ['0100',     '', '0000',     '', '0000',     '', '0001', '0000'];
	this.shapes['M'] = ['1100', '1100', '0000', '0000', '0000', '0000', '0000', '0000'];
	this.shapes['N'] = ['1100', '0000', '0000', '0000', '0000', '0000', '0000', '0011'];
	this.shapes['O'] = ['1000', '0100', '0000', '0000', '0000', '0000', '0001', '0010'];
	this.shapes['P'] = ['1000', '0100', '0000', '0010', '0000',     '', '0011',     ''];
	this.shapes['Q'] = ['1000', '0100', '0000', '0000', '0001', '0010',     '', '0001'];
	this.shapes['R'] = ['1000', '0100', '0000', '0010', '0000', '0100', '0011', '0011'];
	this.shapes['S'] = ['1000', '0010', '0001',     '',     '', '0100', '0001', '0010'];
	this.shapes['T'] = ['0000', '0000', '0000', '0000', '0000', '0000', '0000', '0000'];
	this.shapes['U'] = ['1100', '1100', '0000', '0000', '0000', '0000', '0001', '0010'];
	this.shapes['V'] = ['0100', '1000', '0000', '0000', '0000', '0000', '0001', '0010'];
	this.shapes['W'] = ['0100', '1000', '0000', '0000', '0000', '0000', '0011', '0011'];
	this.shapes['X'] = ['0100', '1000', '0001', '0010', '1000', '0100', '0010', '0001'];
	this.shapes['Y'] = ['0100', '1000', '0001', '0000',     '', '0000',     '', '0010'];
	this.shapes['Z'] = ['0000', '0100',     '', '0010', '1000',     '', '0001', '0000'];

	this.element = document.createElement('div');
	var shapes = this.shapes[ this.glyph ];
	for(var index in shapes) {
		var shape = document.createElement("div");
		this.element.appendChild(shape);
	}
	parent.append(this.element);
	this.update(this.glyph);
	return this;
}

Alpha.prototype.next = function() {
	var index = ALPHABET.indexOf(this.glyph);
	index++;
	if(index==ALPHABET.length) {
		index = 0;
	}
	this.update( ALPHABET[index] );
}

Alpha.prototype.update = function(glyph) {
	this.glyph = glyph.toUpperCase();
	var shapes = this.shapes[this.glyph];
	var children = this.element.childNodes;
	this.element.className = 'glyph glyph-'+this.glyph;
	for(var i=0; i<children.length; i++) {
		if(shapes[i]=='') {
			for(var corner in CORNERS) {
				children[i].style[CORNERS[corner]] =  '20vw';
				children[i].style.opacity = 0;
			}
		} else {
			for(var corner in CORNERS) {
				children[i].style[CORNERS[corner]] = (shapes[i][corner]=='1') ? '20vw' : '0';
				children[i].style.opacity = 1;
			}
		}
	}
}
