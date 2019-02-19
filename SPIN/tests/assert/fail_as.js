/* Copyright (c) Blake Loring | LICENSE.md for license details */

traitdef Test;
traitdef NoTest;

var x = 5 as <!Test!> drop <!Test!>;

function f(x: <!Test * Test * Test!>) {

}

f(x);

assert x is <!Test!>;
