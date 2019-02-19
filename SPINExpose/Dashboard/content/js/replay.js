/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

const remote = require('electron').remote;
const Executor = remote.require('../src/expose_executor');
const view = require('./view');

module.exports = function(file, input) {
	Executor(file, input, function(data) {
		view.out('' + data);
	}, function() {
	});
}
