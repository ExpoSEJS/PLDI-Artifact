/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

import NodeDocument from './NodeDocument';
import Utils from '../MockerUtilities';

export default {
	setup: function() {
		global.window = GLOBAL;

		global.addEventListener = Utils.nop;
		global.attachEvent = Utils.nop;

		global.removeEventListener = Utils.nop;
		global.detachEvent = Utils.nop;

		NodeDocument.setup();
	}
};
