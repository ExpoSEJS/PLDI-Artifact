/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import NodeHTTPRequest from './NodeHttpRequest';
import NodeWindow from './NodeWindow';
import NodeNavigator from './NodeNavigator';

export default {
	setup: function() {
		NodeWindow.setup();
		NodeHTTPRequest.setup();
		NodeNavigator.setup();
	}
};
