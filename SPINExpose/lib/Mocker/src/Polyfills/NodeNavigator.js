/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

class Navigator {}

Navigator.prototype.userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36";

export default {
	setup: function() {
		global.navigator = new Navigator();
	}
}
