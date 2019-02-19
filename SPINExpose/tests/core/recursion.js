/* Copyright (c) Blake Loring | LICENSE.md for license details */

function fibs(n) {
	
	if (n < 2) {
		return n;
	}

	return fibs(n - 1) + fibs(n - 2);
}

fibs(15);
