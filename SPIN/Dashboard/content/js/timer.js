/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

const view = require('./view');

let interval;
let start;

function startClock() {
	start = new Date().getTime();
	interval = setInterval(function() {
		let now = new Date().getTime();
		view.time(((now - start) / 1000).toFixed(2));
	}, 100);
}

function stopClock() {
	clearInterval(interval);
	view.time(null);
}

module.exports = {
	start: startClock,
	stop: stopClock
}
