/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

var a = symbolic A initial 'hello';

if (a === "goodbye") {
	console.log('PASS');
} else {
	console.log('FAIL');
}

if (a === "derp") {
	console.log('AND THEN SOME');
} else {
	console.log('NOT THEN SOME');
}
