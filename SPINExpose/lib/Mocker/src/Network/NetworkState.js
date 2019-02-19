/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import State from '../State.js';

class NetworkState extends State {
	constructor(initial, handlers) {
		super(initial);
		this._handlers = handlers;
	}
	
	_eachWhere(cpredicate, dpredicate) {
		this._handlers.forEach(handler => { if (cpredicate(handler)) { dpredicate(handler); }});
	}

	handleRequest(request, cb) {
		this._eachWhere(handler => handler.shouldHandle(this, request),
				handler => handler.handle(this, request, cb));
	}
}

export default NetworkState;
