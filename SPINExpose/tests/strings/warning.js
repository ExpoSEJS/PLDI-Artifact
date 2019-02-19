/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

var x = symbolic X initial 10;
var s = symbolic S initial "foo";

console.log("x is initialized to", x);
console.log("s is initialized to", s);

if (x > 0) {
    console.log("x > 0");
} else {
    console.log("x <= 0");
}

console.log("prefix " + s + " suffix");

if ("x" + s + "z" == "xyz") {
	console.log("s is now " + s);
}
