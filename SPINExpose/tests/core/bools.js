/* Copyright (c) Blake Loring | LICENSE.md for license details */

var a;
var b;

a = true;
b = a;

assert a == b;

a = !a;

assert a != b;

b = !a;

assert b != a;

b = a;

assert b == a;
