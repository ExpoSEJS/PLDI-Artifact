/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

/**
 * Thrown by the underlying script when the run should immediately terminate without an error
 */
 
class NotAnErrorException {
	toString() {
		return 'NotAnErrorException';
	}
}

export default NotAnErrorException;
