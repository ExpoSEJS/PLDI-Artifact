/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

/**
 * This is a function that detects whether we are using Electron and 
 * if so does a remote call through IPC rather than a direct require.
 */

 const ELECTRON_PATH_MAGIC = '/electron/';

export default function (library) {
	let lrequire = require;

	if (process && process.execPath && process.execPath.indexOf(ELECTRON_PATH_MAGIC) != -1) {
		lrequire = require('electron').remote.require;
	}

	const result = lrequire(library);

	return result.default ? result.default : result;
}
