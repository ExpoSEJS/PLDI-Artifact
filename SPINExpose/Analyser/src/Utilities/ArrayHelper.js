/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

export default {
	add: function(array, item) {
		array.push(item);
		return array;
	},

	addIf: function(condition, array, item) {
		return condition ? ArrayHelper.add(array, item) : array;
	}
};
