/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import Request from './Network/NetworkRequest';

export default {
	replace: function(object, index, value) {
		object[index] = value;
	},
	nop: function() {}
}
