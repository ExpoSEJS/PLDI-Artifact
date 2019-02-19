/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

var a = symbolic HELLO initial 'HELLO';
var b = symbolic NO initial 'NOPE';

if (a === b) {
	console.log('Yes');
	assert a == b;
} else {
	console.log('Nope');
}
