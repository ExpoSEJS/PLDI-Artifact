/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";
var x = symbolic X initial 0;
assume x < 4;

for (var i = 0; i < x; i++) {
  console.log("Iteration " + i);
}

assert i != 5;
console.log("Assertion did not fail");
