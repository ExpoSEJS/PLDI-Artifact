/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

export default {
	setup: function() {
		if (!String.prototype.startsWith) {
		    String.prototype.startsWith = function(searchString, position){
		      position = position || 0;
		      return this.substr(position, searchString.length) === searchString;
		  };
		}
	}
};
