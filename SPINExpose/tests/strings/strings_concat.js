/* Copyright (c) Blake Loring | LICENSE.md for license details */

var x = symbolic A initial "Hello";
var y = symbolic B initial "Goodbye";

if (x.concat('abc',y) == "aabcd") {
	//One path
	console.log('Weird');
}
