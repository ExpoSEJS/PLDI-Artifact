/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

class Element {
	Element(type, id) {
		this._type = type;
		this._id = id;
	}

	compareDocumentPosition() {
		return 1;
	}
}

class Document {
	createElement(type) {
		return new Element();
	}

	getElementById(id) {
		return new Element('div', id);
	}
}

Document.prototype.documentElement = new Element('html');

export default {
	setup: function() {
		global.document = new Document();
	}
}
