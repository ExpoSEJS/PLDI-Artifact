/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

class Handler {
	shouldHandle(state, request) {
		return false;
	}

	handle(state, request, callback) {}
}

export default Handler;
