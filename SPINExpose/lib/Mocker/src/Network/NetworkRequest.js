/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

class NetworkRequest {
	constructor(url, data) {
		this._url = url;
		this._data = data;
	}

	getUrl() {
		return this._url;
	}

	getData() {
		return this._data;
	}
}

export default NetworkRequest;
