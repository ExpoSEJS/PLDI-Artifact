/* Copyright (c) Blake Loring | LICENSE.md for license details */

var q = symbolic Q initial 10;

if (q < 10) {
	var j = 0;

	for (var i = 0; i < q; i++) {
		j++;
	}

	console.log('Done ' + j);
}
