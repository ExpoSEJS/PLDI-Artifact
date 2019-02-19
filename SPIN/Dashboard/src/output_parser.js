/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

let expose = require('./expose');

module.exports = function(data) {
	let match = expose.OUT_REGEX.exec(data);
	if (match) {
		let summary = JSON.parse(match[1]);
		
		summary.done.forEach(x => {
			expose.coverage(x);
		});

		expose.sort(summary);

		return {
			source: summary.source,
			info: expose.summaryInfo(summary),
			jobs: summary.done,
			coverage: summary.done[summary.done.length - 1].coverage
		};
	}
}
