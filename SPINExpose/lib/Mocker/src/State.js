/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

class State {
	constructor(initial) {
		this._current = initial;
	}

	setState(newState) {
		this._current = newState;
	}

	getState() {
		return this._current;
	}
}

export default State;
