/* Copyright (c) Blake Loring | LICENSE.md for license details */

"use strict";

const output = require('./output');
const timer = require('./timer');
const summary = require('./summary');
const view = require('./view');
const remote = require('electron').remote;
const {dialog} = remote.require('electron');
const Executor = remote.require('../src/expose_executor');

let exec = null;

function running() {
	return (exec && exec.running);
}

function kill() {
	exec.kill();
	exec.stdin && exec.stdin.end();
	exec.stdout && exec.stdout.end();
	exec.stderr && exec.stderr.end();
}

function runExpoSE() {

	if (running()) {
		console.log('Already Running Something');
		return;
	}

	let file = dialog.showOpenDialog({properties: ['openFile'], filters: [{name: 'JavaScript File', extensions: ['js']}]});

	if (file) {
		view.clear();
		view.running(true);
		summary(null);
		timer.start();
		exec = Executor(file, null, function(data) {
			view.out('' + data);
		}, function() {
			view.running(false);
			timer.stop();
			output.handleOutput('' + exec.final);
		});
	}
}

module.exports = {
	runExpoSE: runExpoSE,
	kill: kill,
	running: running
}
