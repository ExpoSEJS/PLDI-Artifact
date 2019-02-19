/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import NetworkState from '../NetworkState';
import Handler from '../../Handler';

const States = {
	NotLoggedIn: 0,
	LoggedIn: 1
};

class LoginHandler extends Handler {
	shouldHandle(state, request) {
		return request.getUrl() === '/login';
	}

	handle(state, request, callback) {
		state.setState(States.LoggedIn);
		callback('OK', undefined);
	}
}

class GetDataHandler extends Handler {
	shouldHandle(state, request) {
		return request.getUrl() === '/data';
	}

	handle(state, request, callback) {
		if (state.getState() === States.LoggedIn) {
			callback({some: 'Data'});
		} else {
			callback(undefined, 'NotLoggedIn');
		}
	}
}

class LoginRest extends NetworkState {
	constructor() {
		super(States.NotLoggedIn, [new LoginHandler(), new GetDataHandler()]);
	}
}

export default LoginRest;
