/* Copyright (c) Blake Loring | LICENSE.md for license details */

setTimeout(function() {
	var x = symbolic A initial 5;
	
	if (x > 10) {
		console.log('X > 10');
		setTimeout(function() {
			if (x < 20) {
				console.log('Err');
				throw 'AAAH';
			}
		}, 200);
	} else {
		console.log('X <= 10');
	}

}, 150);
