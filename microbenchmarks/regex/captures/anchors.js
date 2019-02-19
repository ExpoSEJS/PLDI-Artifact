/* Copyright (c) Royal Holloway, University of London | Contact Blake Loring (blake@parsed.uk), Duncan Mitchell (Duncan.Mitchell.2015@rhul.ac.uk), or Johannes Kinder (johannes.kinder@rhul.ac.uk) for details or support | LICENSE.md for license details */

var S$ = require('S$');
var x = S$.symbol("X", '');
var b = /(a)(b)(c)/.exec(x);

if (b) {
	if (b[1] != 'a') throw 'Unreachable';
	if (b[2] != 'b') throw 'Unreachable';
	if (b[3] != 'c') throw 'Unreachable';

	if (x == 'helloabc') throw 'Reachable';
	if (x == 'abchello') throw 'Reachable';

	if (b[0] == "helloabc") throw 'Unreachable';
	if (b[0] == "abchello") throw 'Unreachable';

	throw 'Reachable';
}
