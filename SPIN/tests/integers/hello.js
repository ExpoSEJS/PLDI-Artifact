/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

var x = symbolic X initial 5;
var a = symbolic A initial true;

console.log("x is initialized to", x);
console.log("a is initialized to", a);

if (x > 0) {
	assert x > 0;
} else {
	assert x <= 0;
}
