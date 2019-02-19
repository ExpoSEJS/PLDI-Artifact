/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

class XMLHttpRequest {
	getResponseHeader() {
		return 'SOMESTRINGOFSTUFF';
	}

	getAllResponseHeaders() {
		return 'SOMESTRINGOFSTUFF';
	}

	open() {}

	send() {
		if (this.onreadystatechange) {
			this.onreadystatechange();
		}
	}

	abort() {}
}

XMLHttpRequest.prototype.onreadystatechange = null;
XMLHttpRequest.prototype.readyState = 4;

XMLHttpRequest.prototype.response = "DUMMYRESPONSE";
XMLHttpRequest.prototype.responseText = "DUMMYRESPONSE";
XMLHttpRequest.prototype.responseType = "text";

export default {
	setup: function() {
		global.XMLHttpRequest = XMLHttpRequest;
	}
};
