/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

var a = symbolic HI initial 'hi';

if (a.length > 0 && a !== 'hello' && a.replace('h...o', '') === '') {
	assert a.length != 0;
	console.log('A length: ' + a.length);
}
