/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

var A = symbolic A initial true;
var B = symbolic B initial true;

if (A) {
	if (B) {
		assert false;
	}
} else {
	if (B) {
	}
}
