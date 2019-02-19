/* Copyright (c) Blake Loring | LICENSE.md for license details */

var x = function() { return x.y; };
var y = function() {};
x.y = y;
x()();
