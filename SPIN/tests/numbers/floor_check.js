/* Copyright (c) Blake Loring | LICENSE.md for license details */

/**
 * Preample - Harness traits standard library
 */

traitdef IntChecked;

function WrapIntCheck(scope, fields) {
	fields.forEach(function(field) {
		var old = scope[field];
		if (old) {
			scope[field] = function() {
				return old.apply(this, arguments) as <! IntChecked !>;
			}
		}
	});
}

var opInt = parseInt;
parseInt = function() { opInt.apply(this, arguments) as <! IntChecked !>; };

WrapIntCheck(Math, ['ceil', 'trunc', 'floor', 'round']);

/**
 * End of preamble
 */

 function DoSensetiveOp(data, start: <!IntChecked!>, end: <!IntChecked!>) {

 }

if (symbolic A initial true) {
	DoSensetiveOp([1,2,3], 5, 6); //Bad: Not necessarily 
} else {
	DoSensetiveOp([1,2,3], Math.floor(6), parseInt("62", 10));
}
