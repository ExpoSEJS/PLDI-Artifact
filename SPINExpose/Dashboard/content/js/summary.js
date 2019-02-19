/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

module.exports = function(data) {
	let summary = $('#summary_body');

	summary.html('');

	if (data) {
		inf = data.info;
	} else {
		inf = {
			pathCount: '',
			totalExec: '',
			meanTest: '',
			medianTest: '',
			worstCase: '',
			bestCase: ''
		}
	}

	summary.html(summary.html() + '<tr><td>Total Paths</td><td>' + inf.pathCount + '</td>');
	summary.html(summary.html() + '<tr><td>Total Runtime</td><td>' + inf.totalExec + '</td>');
	summary.html(summary.html() + '<tr><td>Average Test (Mean)</td><td>' + inf.meanTest + '</td>');
	summary.html(summary.html() + '<tr><td>Average Test (Median)</td><td>' + inf.medianTest + '</td>');
	summary.html(summary.html() + '<tr><td>Best Case</td><td>' + inf.worstCase + '</td>');
	summary.html(summary.html() + '<tr><td>Worst Case</td><td>' + inf.bestCase + '</td>');
}
