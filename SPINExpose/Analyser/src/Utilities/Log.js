/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

/**
 * Class to handle logging
 * Structured this way for historical reasons, unneeded 
 * logs are now removed at compile for performance
 */
 
class Log {
	logHigh(msg) {
		console.log('ExpoSE HIGH: ' + msg);
	}

	logMid(msg) {
		console.log('ExpoSE MID: ' + msg);
	}

	log(msg) {
		console.log('ExpoSE: ' + msg);
	}
}

export default new Log();
